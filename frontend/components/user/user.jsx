import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.followUnfollow = this.followUnfollow.bind(this);
  };

  componentWillMount() {
    // this.props.fetchPhotos();
    this.props.fetchAllFollows();
    this.props.fetchAllUsers();
  }

  follow() {
    const follow = {
      followed_id: this.props.user.id,
      follower_id: this.props.currentUser.id
    };
    this.props.createFollow(follow);
  }

  toggleFollow() {
    const currentUserId = this.props.currentUser.id;
    let follows = this.userReady().follow;
    follows = follows.filter(f => f.follower_id === currentUserId);

    if (follows.length > 0) {
      this.props.deleteFollow(follows[0].id);
    } else {
      this.follow();
    }
  }

  followUnfollow() {
    const currentUserId = this.props.currentUser.id;
    let follows = this.userReady().follow;
    follows = follows.filter(f => f.follower_id === currentUserId);

    if (follows.length > 0) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }


  userReady() {
    if (this.props.user) {
      return this.props.user;
    } else {
      return {
        username:"",
        icon_url:"",
        nickname:"",
        photos:[],
        follow:[]
      };
    }
  }

  render() {
    // debugger
    return (
      <div className='user-profile-container'>
        <div className='user-profile-box'>
          <img className='user-profile-icon' src={this.userReady().icon_url}/>
          <div className='user-profile-info'>

            <div className='user-profile-user-follow'>
              <h2 className='user-profile-username'>{this.userReady().username}</h2>
              <div className='user-profile-buttons'>
                <button
                  className="user-profile-follow-button"
                  onClick={this.toggleFollow}>
                  {this.followUnfollow()}
                </button>
              </div>

            </div>
            <span className='user-profile-nickname'>{this.userReady().nickname}</span>
            <div className='user-profile-like-follow'>
              <span>{this.userReady().photos.length} posts</span>
              <span>{this.userReady().follow.length} followers</span>
              <span>{this.props.following} following</span>
            </div>
          </div>
        </div>
        <div className='user-profile-photos'>
          {
            this.userReady().photos.map((photo, i) =>
              <div key={i}>
                <img
                  onClick={() => this.props.router.push(`main/photo-detail/${photo.id}`)}
                  key={photo.id}
                  src={photo.photo_url}
                />
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default withRouter(User);
