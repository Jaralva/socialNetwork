import React, {useRef} from "react";
import propost from "./profilePost.module.css"
import {Post} from "./Post/post";
import {ActionTypes, PostsType, ProfilePageType} from "../../../redux/store";
import {type} from "os";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

type PropsProfilePostsType = {
    state: ProfilePageType
    addPost: (message: string) => void
    updatePostText: (posttext: string) => void
}

export const ProfilePosts = (props: PropsProfilePostsType) => {

    useRef()

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    const updateTextOnChange = () => {
        if (newPostElement.current) {
            props.updatePostText(newPostElement.current.value)
        }
    }

    return (
        <div className={propost.all}>
            My Posts
            <div>
                <textarea ref={newPostElement} onChange={updateTextOnChange}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className="posts">
                {props.state.postsdata.map((pos) => {
                    return (
                        <Post message={pos.message} likescount={pos.likes}/>
                    )
                })}
            </div>
        </div>
    )
}