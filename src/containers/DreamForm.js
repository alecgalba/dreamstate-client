import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDreamFormData } from '../actions/dreamForm';
import { createDream } from '../actions/dreamActions';
import FormError from '../components/FormError';

class DreamForm extends Component {

  handleOnChange = e => {
    const {name, value} = e.target;
    const currentDreamFormData = Object.assign({}, this.props.dreamFormData, {
      [name]: value
    })
    this.props.updateDreamFormData(currentDreamFormData)
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { createDream, dreamFormData, history} = this.props;
        createDream(dreamFormData, history);
  }

  render() {
    const { name, description, sleep_hours } = this.props.dreamFormData;

    return(
      <div>
        <h1 className='dreamName'>Create a New Dream</h1>
        {this.props.errors === true ? <FormError/> : null}

        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' onChange={this.handleOnChange} name='name' value={name} />
          </div>

          <div>
            <label htmlFor='description'>Description:</label>
            <textarea type='text' onChange={this.handleOnChange} name='description' value={description} />
          </div>

          <div>
            <label htmlFor='sleep_hours'>Hours Asleep:</label>
            <textarea type='text' onChange={this.handleOnChange} name='sleep_hours' value={sleep_hours} />

            <button type='submit' onClick={this.handleOnSubmit}>Add Dream</button>
          </div>
        </form>
        <h1>Happy Dreaming!</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dreamFormData: state.dreamFormData,
    errors: state.errors
  }
}

export default connect(mapStateToProps, {updateDreamFormData, createDream})(DreamForm)
