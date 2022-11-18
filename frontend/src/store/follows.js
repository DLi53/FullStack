import csrfFetch from "./csrf";

// ------------INDEX-----------------

const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS'

export const receiveFollows = follows => {
return {
  type: RECEIVE_FOLLOWS,
  follows
}};

export const fetchFollows = () => async dispatch => {
  const res = await csrfFetch(`/api/follows`);
  const data = await res.json();
  dispatch(receiveFollows(data));
}

// ------------SHOW-----------------

const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW'

export const receiveFollow = follow => {
return {
  type: RECEIVE_FOLLOW,
  follow
}};

export const fetchFollow = (followId) => async dispatch => {
  const res = await csrfFetch(`/api/follows/${followId}`);
  const data = await res.json();
  dispatch(receiveFollow(data));
}

// ------------POST-----------------

const ADD_FOLLOW = 'ADD_FOLLOW'

const addFollow = followData => {
    return {
        type: ADD_FOLLOW,
        followData
    }
}
export const createFollow = (followData) => async dispatch => {
    // console.log('INSIDE CREATE FOLLOWNNNNNNNNNNNNN');
    // console.log(followData)
    const res = await csrfFetch(`/api/follows`, {
        method: 'POST',
        body: JSON.stringify(followData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // console.log(res);
    // debugger

    const data = await res.json();
    dispatch(addFollow(data))
}


// ------------EDIT-----------------

const UPDATE_FOLLOW = 'UPDATE_FOLLOW'

const updateFollow = followData => {
    return {
        type: UPDATE_FOLLOW,
        followData
    }
}

export const editFollow = (followData) => async dispatch => {
    const res = await csrfFetch(`api/follows/${followData.id}`, {
        method: 'PATCH',
        body: JSON.stringify(followData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    const data = await res.json();
    dispatch(updateFollow(data))
}

// ------------DELETE-----------------


const REMOVE_FOLLOW = 'REMOVE_FOLLOW'

const removeFollow = followId => {
    return {
        type: REMOVE_FOLLOW,
        followId
    }
}

export const deleteFollow = (followId) => async dispatch => {
    // console.log(followId)
    const res = await csrfFetch(`/api/follows/${followId}`, {
        method: 'DELETE'
    })
    dispatch(removeFollow(followId))
}

// ------------REDUCER-----------------


const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type) {
        case RECEIVE_FOLLOWS:
            return { ...nextState, ...action.follows};
        case RECEIVE_FOLLOW:
            nextState[action.follow.id] = action.follow
            return nextState
        case ADD_FOLLOW:
            nextState[action.followData.id] = action.followData
            return nextState
        case UPDATE_FOLLOW:
            nextState[action.followData.id] = action.followData
            return nextState
        case REMOVE_FOLLOW:
            delete nextState[action.followId];
            return nextState
        default:
            return nextState;
    }
}

export default followsReducer