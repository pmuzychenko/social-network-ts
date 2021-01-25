import {addMessageAC, changeNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newDialogMessage: state.dialogsPage.newDialogMessage,
    }
}
let MapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {dispatch(addMessageAC())},
        changeMessage: (message: string) => {dispatch(changeNewMessageAC(message))}
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, MapDispatchToProps)(AuthRedirectComponent)