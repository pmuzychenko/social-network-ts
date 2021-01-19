import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Friends} from "./Friends";

let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sideBar
    }
}

let MapDispatchToProps = (dispatch: any) => {
    return {
    }
}
export const FriendsContainer = connect(mapStateToProps, MapDispatchToProps)(Friends)


