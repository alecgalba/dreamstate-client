export default (state = [], action) => {

  switch (action.type) {

    case 'GET_DREAMS':
      return action.dreams;

    case 'CREATE_DREAM':
      return state.concat(action.dream);

    case 'REMOVE_DREAM':
      return state.filter(dream => dream.id !== action.dreamId);

    case 'LIKE_DREAM':
      return state.map((dream) => {
        if (dream.id === action.dream.id) {
          return action.dream
        } else {
          return dream
        }
      });

      default:
        return state;
  }
}
