import React from "react"
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {AuthStateType, getAuthUserDataTC} from "../../redux/auth-reducer";

type HeaderContainerType = MSTPType & MDTPType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
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
    getAuthUserDataTC: () => void
}

let mapStateToProps = (state: AppStateType): MSTPType => {
    return {state: state.auth}
}

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)