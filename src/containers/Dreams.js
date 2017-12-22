import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import DreamCard from '../components/DreamCard';
import DreamForm from './DreamForm';
import DreamShow from './DreamShow';
import { getDreams } from '../actions/dreamActions';
import { Switch, Route } from 'react-router-dom';
import { likeDream } from '../actions/dreamActions';

class Dreams extends Component {

  componentDidMount() {
    this.props.getDreams()
  }

  render() {
    const { dreams, match } = this.props;
    const sortedDreams = dreams.sort(function(a,b) {
      return b.likes - a.like;
    })

    return (
      <div>
        <Switch>
        <Route exact path={match.url}
          render={() =>
        <div className='DreamsContainer'>
        <h1 className='dreamName'>Dreams</h1>
          {sortedDreams.map(dream => <DreamCard key={dream.id} dream={dream} />)}
        </div>
      }
      />
      <Route exact path='/dreams/new' component={DreamForm}/>
          <Route
            path='/dreams/:dreamId'
            component={DreamShow}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    dreams: state.dreams
  })
}

export default connect(mapStateToProps, {getDreams, likeDream})(Dreams);
