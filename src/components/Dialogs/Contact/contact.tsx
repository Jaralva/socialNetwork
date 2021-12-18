import React from "react";
import dig from "./../dialogs.module.css"
import {NavLink} from "react-router-dom";


type ContactType = {
    name: string
    id : string
}

export const Contact = (props: ContactType) => {

    let path = "/messages/" + props.id;

    return (
        <div className={dig.contact + ' ' + dig.active}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
