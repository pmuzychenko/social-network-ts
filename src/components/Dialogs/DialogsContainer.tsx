import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css";

import {addMessageAC, changeNewMessageAC, DialogsActionsTypes} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileActionsTypes} from "../../redux/profile-reducer";
import {Dialogs} from "./Dialogs";


type PropsType = {
    state: AppStateType
    dispatch: (action: DialogsActionsTypes | ProfileActionsTypes) => void
}


export const DialogsContainer: React.FC<PropsType> = (props) => {
    let dialogs = props.state.dialogsPage.dialogs
    let messages = props.state.dialogsPage.messages
    let newDialogMessage = props.state.dialogsPage.newDialogMessage

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    const changeMessage = (message: string) => {
        props.dispatch(changeNewMessageAC(message))
    }


    return (
       <Dialogs addMessage={addMessage}
                changeMessage={changeMessage}
                dialogs={dialogs}
                messages={messages}
                newDialogMessage={newDialogMessage}
       />
    )
}