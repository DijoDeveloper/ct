import ProfileList from './Index'
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        UserInfo: state.AuthReducer.UserInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);
