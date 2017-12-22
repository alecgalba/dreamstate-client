const initialState = {
  name: '',
  description: '',
  sleep_hours: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATED_DREAM':
      return action.dreamFormData;

      case 'RESET_DREAM_FORM':
        return initialState;

      default:
        return state;
  }
}
