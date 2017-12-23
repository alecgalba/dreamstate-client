import { resetDreamForm } from './dreamForm';

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators
export const setDreams = dreams => {
  return {
    type: 'GET_DREAMS',
    dreams
  }
}

export const addDream = dream => {
  return {
    type:'CREATE_Dream',
    dream
  }
}

export const removeDream = dream => {
  return {
    type: 'REMOVE_DREAM',
    dream
  }
}

export const addLikes = dream => {
  return {
    type: 'LIKE_DREAM',
    dream
  }
}


// Async actions
export const getDreams= () => {
  return dispatch => {
    return fetch(`${API_URL}/dreams`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(dreams => {
      dispatch(setDreams(dreams))
    })
    .catch(error => console.log(error));
  }
}

export const fetchDream = (dreamId) => {
	return dispatch => {
		return fetch(`${API_URL}/dreams/${dreamId}`)
			.then(response => response.json())
			.then(dream => {
				dispatch(setDreams([dream]));
			})
			.catch(error => console.log(error));
	}
}

export const createDream = (dream, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/dreams`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({dream: dream})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(dream => {
      dispatch(addDream(dream))
      dispatch(resetDreamForm())
      routerHistory.replace(`/dreams/${dream.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace(`/dreams/new`)
     })
  }
}

export const deleteDream = (dreamId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/dreams/${dreamId}`, {
      method: "DELETE",
    })
    .then(response => {
      dispatch(removeDream(dreamId));
      routerHistory.replace('/dreams');
    })
    .catch(error => console.log(error))
  }
}

export const likeDream = (dream, dreams) => {
  const updatedDream = Object.assign(...dream, { likes: dream.likes + 1 })
  return dispatch => {
    return fetch(`${API_URL}/dreams/${dream.id}`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({dream: updatedDream})
      })
      .then(response => response.json())
      .then(dream => {
        dispatch(addLikes(dream))
        dispatch(addLikes(dreams))
      })
    .catch(error => console.log(error))
  }
}

function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
