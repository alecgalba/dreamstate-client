import React { Component } from 'react';

class LikeButton extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.likeDream} className='likeB'>Likes { this.props.dream.likes}</button>
      </div>
    )
  }
}

export default (likeButton);
