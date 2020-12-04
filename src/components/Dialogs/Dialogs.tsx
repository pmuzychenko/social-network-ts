import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


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
    newDialogMessage: string
    addMessage: () => void
    changeMessage: (message: string) => void

}


export const Dialogs: React.FC<DialogsPagePropsType> = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.messages.map(msg => <Message key={msg.id} message={msg.message} id={msg.id}/>)

    const onAddMessage = () => {
        props.addMessage()
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessage(e.currentTarget.value)
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={props.newDialogMessage} onChange={onChangeMessage}></textarea>
            </div>
            <div>
                <button onClick={onAddMessage}>Add message</button>
            </div>
        </div>
    )
}