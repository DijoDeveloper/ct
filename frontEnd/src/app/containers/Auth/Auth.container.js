import Auth from './Index'
import { connect } from 'react-redux';
import { updateAuth } from '../../../redux/actions/Auth.action'
const mapStateToProps = (state) => {
    return {
        UserInfo: state.AuthReducer.UserInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authActions: (userInfoDetails) => { dispatch(updateAuth(userInfoDetails)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
