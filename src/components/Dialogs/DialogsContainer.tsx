import React from "react";
import {addMessageAC, changeNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {reduxStore => {
                let dialogs = reduxStore.getState().dialogsPage.dialogs
                let messages = reduxStore.getState().dialogsPage.messages
                let newDialogMessage = reduxStore.getState().dialogsPage.newDialogMessage
                const addMessage = () => {
                    reduxStore.dispatch(addMessageAC())
                }

                const changeMessage = (message: string) => {
                    reduxStore.dispatch(changeNewMessageAC(message))
                }
                return <Dialogs addMessage={addMessage}
                                changeMessage={changeMessage}
                                dialogs={dialogs}
                                messages={messages}
                                newDialogMessage={newDialogMessage}
                />
            }}
        </StoreContext.Consumer>
    )
}