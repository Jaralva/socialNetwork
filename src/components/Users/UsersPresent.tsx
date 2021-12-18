import React from "react";
import styles from "./users.module.css";
import {UserType} from "../../redux/UserReducer";
import {NavLink} from "react-router-dom";

type UsersPresentPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    usersPage: UserType[]
    onPageChanged: (pageNumber:number) => void
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}

export const UsersPresent = (props: UsersPresentPropsType) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++ ){
        pages.push(i)
    }

    return(
        <div>
            <div>
                {pages.map( pg => <span onClick={(e) => { props.onPageChanged(pg)
                    console.log('page ' + pg)}} className={props.currentPage === pg ? styles.selectedPage : ''}>{pg}</span>)}
            </div>
            {
                props.usersPage.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={"/profile/" + u.id}>
                        <div className={styles.photo}>
                            <img src={u.photos.small  ? u.photos.small  : 'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png'}/>
                        </div>
                        </NavLink>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}