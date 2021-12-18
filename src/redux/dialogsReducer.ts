import {ActionTypes, DialogPageType} from "./store";

export const updateNewMessageBodyAC = (text: string) => ({type: "UPDATE-NEW-MESSAGE-BODY", body: text} as const)
export const addNewMessageAC = () => ({type: "SEND-MESSAGE"} as const)

let initialState: DialogPageType = {
    dialogdata: [
        {name: "Paul", id: '1'},
        {name: "Margo", id: '2'},
        {name: "Chuk", id: '3'},
        {name: "Kate", id: '4'}
    ],
    messagesdata: [
        {message: "Hi", id: '1'},
        {message: "How are you?", id: '2'},
        {message: "Come on man. That is bullshit!", id: '3'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            let stateCopy = {...state}
            stateCopy.dialogdata = [...state.dialogdata]
            stateCopy.messagesdata = [...state.messagesdata]
            stateCopy.newMessageBody = action.body
            return stateCopy
        case "SEND-MESSAGE":
            let stateCopy1 = {...state}
            stateCopy1.dialogdata = [...state.dialogdata]
            stateCopy1.messagesdata = [...state.messagesdata]
            let newMessage: string = stateCopy1.newMessageBody
            stateCopy1.messagesdata.push({message: newMessage, id: '4'})
            return stateCopy1
        default:
            return state
    }
}