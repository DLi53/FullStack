import csrfFetch from "./csrf";

// ------------INDEX-----------------

const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = users => {
return {
  type: RECEIVE_USERS,
  users
}};

export const fetchUsers = () => async dispatch => {
  const res = await csrfFetch(`/api/users`);
  const data = await res.json();
  dispatch(receiveUsers(data));
}

// ------------SHOW-----------------

const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUser = user => {
return {
  type: RECEIVE_USER,
  user
}};

export const fetchUser = (userId) => async dispatch => {
    console.log(userId);
  const res = await csrfFetch(`/api/users/${userId}`);
  const data = await res.json();
  dispatch(receiveUser(data));
}

// ------------POST-----------------

const ADD_USER = 'ADD_USER'

const addUser = userData => {
    return {
        type: ADD_USER,
        userData
    }
}
export const createUser = (userData) => async dispatch => {
    const res = await fetch(`api/users`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    dispatch(addUser(data))
}


// ------------EDIT-----------------

const UPDATE_USER = 'UPDATE_USER'

const updateUser = userData => {
    return {
        type: UPDATE_USER,
        userData
    }
}

export const editUser = (userData) => async dispatch => {
    const res = await csrfFetch(`api/users/${userData.id}`, {
        method: 'PATCH',
        body: JSON.stringify(userData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    const data = await res.json();
    dispatch(updateUser(data))
}

// ------------DELETE-----------------


const REMOVE_USER = 'REMOVE_USER'

const removeUser = userId => {
    return {
        type: REMOVE_USER,
        userId
    }
}

export const deleteUser = (userId) => async dispatch => {
    const res = await fetch(`api/users/${userId}`, {
        method: 'DELETE'
    })
    dispatch(removeUser(userId))
}

// ------------REDUCER-----------------


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type) {
        case RECEIVE_USERS:
            return { ...nextState, ...action.users};
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState
        case ADD_USER:
            nextState[action.userData.id] = action.userData
            return nextState
        case UPDATE_USER:
            nextState[action.userData.id] = action.userData
            return nextState
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState
        default:
            return nextState;
    }
}

export default usersReducer