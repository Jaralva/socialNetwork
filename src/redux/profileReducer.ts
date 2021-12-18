import {ActionTypes, PostsType, ProfilePageType,} from "./store";
import {UserProfileAxiosDataType} from "../components/Content/contentContainer";

export const addPostAC = (text: string) => ({type: "ADD-POST", postText: text } as const)
export const updateNewPostTextAC = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newPost: text} as const)
export const setUserProfile = (profile :UserProfileAxiosDataType) => ({type: "SET-USER-PROFILE", profile}) as const

let initialState: ProfilePageType = {
    profile: {} as UserProfileAxiosDataType,
    postsdata: [
        {message: "Hi. What are you doing?", id: '1', likes: 14},
        {message: "It's my second post.", id: '2', likes: 11},
        {message: "Donda is dropped", id: '3', likes: 79}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action:ActionTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {message: action.postText, id: '4', likes: 0}
            let stateCopy = {...state}
            stateCopy.postsdata = [...state.postsdata]
            stateCopy.postsdata.push(newPost)
            return stateCopy
        case "UPDATE-NEW-POST-TEXT":
            let stateCopy1 = {...state}
            stateCopy1.postsdata = [...state.postsdata]
            stateCopy1.newPostText = action.newPost
            return stateCopy1
        case "SET-USER-PROFILE": {
            let stateCopy2 = {...state}
            stateCopy2.profile = action.profile
            return stateCopy2
        }
        default:
            return state
    }
}