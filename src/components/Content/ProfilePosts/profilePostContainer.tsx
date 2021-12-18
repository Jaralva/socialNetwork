import React, {useRef} from "react";
import {ActionTypes, PostsType, ProfilePageType, StateType} from "../../../redux/store";
import {type} from "os";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {ProfilePosts} from "./profilePost";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return{
        state: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        addPost:(text: string) => {
            if (text) {
                dispatch(addPostAC(text))
            }
        },
        updatePostText: (text:string) => {
            if (text) {
                dispatch(updateNewPostTextAC(text))
            }
        }
    }
}

export const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)