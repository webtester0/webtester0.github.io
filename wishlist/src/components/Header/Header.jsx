import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mainHeader from './HeaderMain.module.scss';
import friendsHeader from './FriendsHeader.module.scss';
import myPage from './HeaderMyPage.module.scss';
import user from './HeaderFriendPage.module.scss';

class Header extends React.Component {
  static propTypes = {
    fio: propTypes.string,
    myPhoto: propTypes.string,
    friendOne: propTypes.string,
    friendTwo: propTypes.string,
    friendThree: propTypes.string,
    titleMe: propTypes.string,
    titleBack: propTypes.string,
    titleFriends: propTypes.string,
    linkMe: propTypes.string,
    linkBack: propTypes.string,
    linkFriends: propTypes.string,
    getInfo: propTypes.func,
    getFriendsInfo: propTypes.func,
    name: propTypes.string,
  };

  static defaultProps = {
    fio: '',
    myPhoto: '',
    friendOne: '',
    friendTwo: '',
    friendThree: '',
    titleMe: '',
    titleBack: '',
    titleFriends: '',
    linkMe: '',
    linkBack: '',
    linkFriends: '',
    getInfo: () => {},
    getFriendsInfo: () => {},
    name: '',
  };

  renderTemplateLeftPart = () => {
    const { fio, myPhoto, titleMe, linkMe, name } = this.props;

    let cls;

    if (name === 'main') {
      cls = mainHeader;
    }
    if (name === 'myPage') {
      cls = myPage;
    }
    if (name === 'friends') {
      cls = friendsHeader;
    }
    if (name === 'user') {
      cls = user;
    }

    if (!titleMe) {
      return (
        <div className={cls.header_me}>
          <img src={myPhoto} alt="my_avatar" />
          <div className={`${cls.nickname} ${cls.fio}`}>
            <Link to={linkMe}>{fio}</Link>
          </div>
        </div>
      );
    }
    return (
      <div className={cls.header_me}>
        <div className={`${cls.nickname} ${cls.fio}`}>
          <Link to={linkMe}>{titleMe}</Link>
        </div>
      </div>
    );
  };

  renderTemplateMiddlePart = () => {
    const { titleBack, linkBack, name } = this.props;

    let cls;

    if (name === 'main') {
      cls = mainHeader;
    }
    if (name === 'myPage') {
      cls = myPage;
    }
    if (name === 'friends') {
      cls = friendsHeader;
    }
    if (name === 'user') {
      cls = user;
    }

    if (titleBack) {
      return (
        <div className={cls.header_back}>
          <Link to={linkBack} className={cls.header_back_link}>
            {titleBack}
          </Link>
        </div>
      );
    }
      return null;

  };

  renderTemplateThirdPart = () => {
    const {
      friendOne,
      friendTwo,
      friendThree,
      titleFriends,
      linkFriends,
      name,
    } = this.props;

    let cls;

    if (name === 'main') {
      cls = mainHeader;
    }
    if (name === 'myPage') {
      cls = myPage;
    }
    if (name === 'friends') {
      cls = friendsHeader;
    }
    if (name === 'user') {
      cls = user;
    }

    if (!(friendOne && friendTwo && friendThree)) {
      return (
        <div className={cls.header_friends}>
          <div className={cls.nickname}>
            <Link to={linkFriends}>{titleFriends}</Link>
          </div>
        </div>
      );
    }
    return (
      <div className={cls.header_friends}>
        <div className={cls.nickname}>
          <Link to={linkFriends}>{titleFriends}</Link>
        </div>
        <img
          className={`${cls.first_img} ${cls.header_friends_avatar}`}
          src={friendOne}
          alt="avatar"
        />
        <img
          className={`${cls.second_img} ${cls.header_friends_avatar}`}
          src={friendTwo}
          alt="avatar"
        />
        <img
          className={`${cls.third_img} ${cls.header_friends_avatar}`}
          src={friendThree}
          alt="avatar"
        />
      </div>
    );
  };

  render() {
    const { getInfo, getFriendsInfo, name } = this.props;

    let cls;
    if (name === 'main') {
      cls = mainHeader;
    }
    if (name === 'myPage') {
      cls = myPage;
    }
    if (name === 'friends') {
      cls = friendsHeader;
    }
    if (name === 'user') {
      cls = user;
    }

    getFriendsInfo();
    getInfo();

    return (
      <div className={cls.header}>
        {this.renderTemplateLeftPart()}
        {this.renderTemplateMiddlePart()}
        {this.renderTemplateThirdPart()}
      </div>
    );
  }
}

export default Header;
