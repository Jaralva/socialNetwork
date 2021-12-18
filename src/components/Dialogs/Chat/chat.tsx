import React from "react";
import dig from "./../dialogs.module.css"


type ChatType = {
    message: string
}

export const Chat = (props: ChatType) => {
    return (
        <div className={dig.chat}>{props.message}</div>
    )
}

