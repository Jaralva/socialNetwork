import React from "react";
import con from './content.module.css'
import {ProfilePosts} from "./ProfilePosts/profilePost";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";
import {ProfilePostsContainer} from "./ProfilePosts/profilePostContainer";
import {UserProfileAxiosDataType} from "./contentContainer";

type ProfileComponentProps = {
    profile: UserProfileAxiosDataType
}

export const Profile = (props : ProfileComponentProps) => {
    console.log(props.profile)
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <ProfilePostsContainer/>
        </div>
    )
}