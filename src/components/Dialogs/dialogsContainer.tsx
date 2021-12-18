import React from "react";
import dig from "./dialogs.module.css"
import {ActionTypes, DialogPageType, StateType} from "../../redux/store";
import {addNewMessageAC, dialogsReducer, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return{
        state: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        addMessage: () => {
            dispatch(addNewMessageAC())
        },
        updateMessageBodyOnChange: (text:string) => {
            dispatch(updateNewMessageBodyAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)