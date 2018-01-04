import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import DreamCard from '../components/DreamCard';
import { getDreams } from '../actions/dreamActions';
import { Route } from 'react-router-dom';
import { likeDream } from '../actions/dreamActions';

class TopDreams extends Component {

  componentDidMount() {
    this.props.getDreams()
  }

  render() {
    const { dreams, match } = this.props;
    const sortedDreams = dreams.sort(function(a, b) {
            return b.likes - a.likes;
          })

    return (
      <div>
      <Route exact path={match.url}
       render={() =>
      <div className="DreamsContainer">
      <h1 className="dreamName">Most And Least Popular Dreams</h1>
        {sortedDreams.map(dream => <DreamCard key={dream.id} dream={dream} /> ).slice(0, 1)}
        {sortedDreams.map(dream => <DreamCard key={dream.id} dream={dream} /> ).slice(-1)}
      </div>
    }
    />
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    dreams: state.dreams
  })
}

export default connect(mapStateToProps, {getDreams, likeDream})(TopDreams);
