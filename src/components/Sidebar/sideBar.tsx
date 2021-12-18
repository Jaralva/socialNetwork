import React from "react";
import sid from './sideBar.module.css'
import {NavLink} from "react-router-dom";

export const SideBar = () => {
    return (
        <nav className={sid.sidebar}>
            <div className={sid.categories}>
                <NavLink to="/profile" activeClassName={sid.active}>Profile</NavLink>
            </div>
            <div className={sid.categories}>
                <NavLink to="/messages" activeClassName={sid.active}>Messages</NavLink>
            </div >
            <div className={sid.categories}>
                <NavLink to="/news" activeClassName={sid.active}>News</NavLink>
            </div>
            <div className={sid.categories}>
                <NavLink to="/music" activeClassName={sid.active}>Music</NavLink>
            </div>
            <div className={sid.categories}>
                <NavLink to="/users" activeClassName={sid.active}>Find Users</NavLink>
            </div>
            <div className={sid.categories}>
                <NavLink to="/settings" activeClassName={sid.active}>Settings</NavLink>
            </div>
        </nav>
    )
}