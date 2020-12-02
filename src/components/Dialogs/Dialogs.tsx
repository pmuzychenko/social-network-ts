import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {ActionsTypes} from "../../redux/state";
import {addMessageAC, changeNewMessageAC} from "../../redux/dialogs-reducer";


type DialogPropsType = {
    name: string
    id: string
}


const DialogItem: React.FC<DialogPropsType> = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

type MessagePropsType = {
    id: string
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}


type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    dispatch: (action: ActionsTypes) => void
    newDialogMessage: string

}


export const Dialogs: React.FC<DialogsPagePropsType> = (props) => {

    let DialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.messages.map(msg => <Message key={msg.id} message={msg.message} id={msg.id}/>)

    const addMessageHandler = () => {
        props.dispatch(addMessageAC())
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageAC(e.currentTarget.value))
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={props.newDialogMessage} onChange={onChangeMessage}></textarea>
            </div>
            <div>
                <button onClick={addMessageHandler}>Add message</button>
            </div>
        </div>
    )
}