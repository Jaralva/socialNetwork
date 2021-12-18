import {addPostAC, setUserProfile, updateNewPostTextAC} from "./profileReducer";
import {addNewMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {followAC, setCurrentPageAC, setLoadingAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "./UserReducer";
import {UserProfileAxiosDataType} from "../components/Content/contentContainer";


export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setUserProfile>


export type ProfilePageType = {
    profile: UserProfileAxiosDataType
    postsdata: Array<PostsType>
    newPostText: string
}
export type DialogPageType = {
    dialogdata: Array<DialogType>
    messagesdata: Array<MessagesType>
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}
export type PostsType = {
    message: string
    id: string
    likes: number
}
type DialogType = {
    name: string
    id: string
}
type MessagesType = {
    message: string
    id: string
}



