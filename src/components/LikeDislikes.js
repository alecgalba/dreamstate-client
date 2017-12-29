import React, { Component } from 'react';

class LikeDislikes extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  increaseLike = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decreaseLike = () => {
    if(this.state.counter > 0){
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }

  render() {

    return (
      <div>
        <button onClick={ this.increaseLike}>Like</button>
        <button onClick={this.decreaseLike}>Dislike</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}


export default LikeDislikes;
