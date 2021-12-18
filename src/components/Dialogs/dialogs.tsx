import React from "react";
import dig from "./dialogs.module.css"
import {Chat} from "./Chat/chat";
import {Contact} from "./Contact/contact";
import {ActionTypes, DialogPageType} from "../../redux/store";
import {addNewMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";

type PropsDialogsType = {
    state: DialogPageType
    addMessage: () => void
    updateMessageBodyOnChange:(text:string) => void
}

export const Dialogs = (props: PropsDialogsType) => {

    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        if (newMessageRef.current) {
            props.addMessage()
            newMessageRef.current.value = ''
        }
    }

    const updateMessageBodyOnChange = () => {
        if (newMessageRef.current) {
            props.updateMessageBodyOnChange(newMessageRef.current.value)
        }
    }



    return (
        <div className={dig.dialogs}>
            <div className={dig.contacts}>
                {props.state.dialogdata.map((dig) => {
                    return (
                    <Contact name={dig.name} id={dig.id}/>
                    )})}

            </div>
            <div className={dig.chats}>
                {props.state.messagesdata.map((mes) => {
                    return(
                        <Chat message={mes.message}/>
                    )
                })}
                <textarea ref={newMessageRef} onChange={updateMessageBodyOnChange}> </textarea>
                <button onClick={addMessage}>Add Post</button>
            </div>
        </div>
    )
}