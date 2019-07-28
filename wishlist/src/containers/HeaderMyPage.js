import {connect} from 'react-redux'
import HeaderMyPage from '../pages/MyPage/HeaderMyPage'
import {getFriendsInfo, getInfo} from "../actions/userInfo";


const mapStateToProps = ({userInfo}) => ({
    friendOne: userInfo.friendOne,
    friendTwo: userInfo.friendTwo,
    friendThree: userInfo.friendThree,
});

const mapDispatchToProps = dispatch => ({
    getInfo: () => dispatch(getInfo()),
    getFriendsInfo: () => dispatch(getFriendsInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMyPage)