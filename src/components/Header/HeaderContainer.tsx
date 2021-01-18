import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";

type HeaderContainerType = MSTPType & MDTPType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {
               let {id, email, login} = response.data.data
               this.props.setAuthUserData(id, email, login)
        })
    }
    render() {
        return (
        <Header {...this.props.state}/>
        )
    }
}
type MSTPType = {
    state: AuthStateType
}

type MDTPType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

let mapStateToProps = (state: AppStateType): MSTPType => {
    return {state: state.auth}
}


export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)