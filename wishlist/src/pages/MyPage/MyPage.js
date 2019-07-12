import React from 'react';
import HeaderMyPage from "./HeaderMyPage";
import MyInfo from "./MyInfo";
import MyWishList from "./MyWishList";



class MyPage extends React.Component {
    render() {
        return (
            <div>
                < HeaderMyPage />
                < MyInfo />
                <MyWishList />
            </div>
        );
    }
}

export default MyPage