import cuid from 'cuid';
export const cuidFN = cuid;

const initialState = {
  author: '',
  comment: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const comment = Object.assign({}, action.comment, { id: cuidFn() });
      return Object.assign({}, state, {
        comments: state.comments.concat(comment),
      });

    case 'DELETE_COMMENT':
      const comments = state.comments.filter(comment => comment.id !== action.id);
      return Object.assign({}, state, { comments });

    default:
      return state;
  }
}
