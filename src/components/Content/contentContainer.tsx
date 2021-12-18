import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {setUserProfile} from "../../redux/profileReducer";
import {debuglog} from "util";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type UserProfileAxiosDataType = {
    aboutMe: string
    contacts: {
        facebook?: string
        website?: string
        vk?: string
        twitter?: string
        instagram?: string
        youtube?: string
        github?: string
        mainLink?: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

class ContentContainer extends React.Component<ProfileMapsPropsType> {



    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            let userID = 2
        }
            axios.get<UserProfileAxiosDataType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userID )
            .then( response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        debugger
        console.log(this.props.profile)
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type PathParamsType = {
    userID: string,
}

type ProfileMapsPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>
type MapStateToPropsType = {
    profile : UserProfileAxiosDataType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileAxiosDataType) => void
}


let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    } as const
}


let WithURLDataContentContainer = withRouter(ContentContainer)

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContentContainer)