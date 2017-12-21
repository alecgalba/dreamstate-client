import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDream } from '../actions/dreamActions';
import { deleteDream } from '../actions/dreamActions';
import DreamForm from './DreamForm';
import DreamCard from './components/DreamCard';
import Dreams from './Dreams';
import LikeButton from '../components/LikeButton';
import { likeDream } from '../actions.dreamActions';

class DreamShow extends Component {

  handleOnClick = () => {
    this.props.likeDream(this.props.dream[0])
  }

  componentDidMount = () => {
    this.props.fetchDream(this.props.matchparams.dreamId);
  }

  render() {
    let dream = this.props.dream[0];
    const {deleteDream, history} = this.props;

    return (
      <div className='dreamShow'>
        {dream ? (
          <div>
            <h1 className='dreamName'>{dream.name}</h1>
            <h3><p>Description: <br />{dream.description}</p></h3>
            <h3><p>Hours Asleep: <br />{dream.sleep_hours}</p></h3>
          </div>
        ) : (
          <p>Loading</p>
        )}
        <br />
        <button onClick={() => deleteDream(dream.id, history)}>Delete</button>
        {dream ? <LikeButton dream={dream} likeDream={this.handleOnClick}/> : 'some error happened ¯\_(ツ)_/¯'}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    dream: state.dreams
  })
}

export default connect(mapStateToProps, {fetchDream, deleteDream, likeDream})(DreamShow);
