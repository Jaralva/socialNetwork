import React from "react";
import {connect} from "react-redux";

import {
    followAC,
    setCurrentPageAC,
    setLoadingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../../redux/UserReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {UsersPresent} from "./UsersPresent";
import {Preloader} from "../../assets/Preloader/Preloader";


type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
    setLoading: (isLoading: boolean) => void
}
export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType


type UserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

class Users extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.setLoading(true)
        axios.get<UserResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(
                    response.data.totalCount === undefined ? 30 : response.data.totalCount)
                this.props.setLoading(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setLoading(true)
        this.props.setCurrentPage(pageNumber)
        axios.get<UserResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setLoading(false)
            })
    }


    render() {

        return (
            <>
                {this.props.isLoading
                    ? <Preloader/>
                    : <UsersPresent
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        usersPage={this.props.usersPage}
                        onPageChanged={this.onPageChanged}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                    />
                }
            </>

        )
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    } as const
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        setLoading: (isLoading: boolean) => {
            dispatch(setLoadingAC(isLoading))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
