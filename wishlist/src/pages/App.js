import React from 'react';
import './App.css';

import SearchMain from "./WishListMain/SearchMain";
import WishlistMain from "./WishListMain/WishlistMain";
import HeaderMain from "./WishListMain/HeaderMain";
import WishList from "./WishListMain/WishList";
import HeaderMyPage from "./MyPage/HeaderMyPage";
import MyInfo from "./MyPage/MyInfo";
import MyWishList from "./MyPage/MyWishList";
import MyPage from "./MyPage/MyPage";



class App extends React.Component {
  render() {
      return (
          <div className="App">
              {/*< MyPage />*/}
              <WishList />
          </div>
      );
  }
}

export default App;
