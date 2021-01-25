import {Redirect} from "react-router-dom";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsForRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirect => ({
    isAuth: state.auth.isAuth
})
export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component<any, any>{
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} />
            return <Component {...this.props}/>
        }
    }

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
