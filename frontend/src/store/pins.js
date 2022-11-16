import csrfFetch from "./csrf";

// ------------INDEX-----------------

const RECEIVE_PINS = 'RECEIVE_PINS'

export const receivePins = pins => {
return {
  type: RECEIVE_PINS,
  pins
}};

export const fetchPins = () => async dispatch => {
  const res = await csrfFetch(`/api/pins`);
  const data = await res.json();
  dispatch(receivePins(data));
}

// ------------SHOW-----------------

const RECEIVE_PIN = 'RECEIVE_PIN'

export const receivePin = pin => {
return {
  type: RECEIVE_PIN,
  pin
}};

export const fetchPin = (pinId) => async dispatch => {
  const res = await csrfFetch(`/api/pins/${pinId}`);
  const data = await res.json();
  dispatch(receivePin(data));
}

// ------------POST-----------------

const ADD_PIN = 'ADD_PIN'

const addPin = pinData => {
    return {
        type: ADD_PIN,
        pinData
    }
}
export const createPin = (pinData) => async dispatch => {
    // console.log('INSIDE CREATE PINNNNNNNNNNNNNN');
    // console.log(pinData)
    const res = await csrfFetch(`/api/pins`, {
        method: 'POST',
        body: JSON.stringify(pinData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // console.log(res);
    // debugger

    const data = await res.json();
    dispatch(addPin(data))
}


// ------------EDIT-----------------

const UPDATE_PIN = 'UPDATE_PIN'

const updatePin = pinData => {
    return {
        type: UPDATE_PIN,
        pinData
    }
}

export const editPin = (pinData) => async dispatch => {
    const res = await csrfFetch(`api/pins/${pinData.id}`, {
        method: 'PATCH',
        body: JSON.stringify(pinData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    const data = await res.json();
    dispatch(updatePin(data))
}

// ------------DELETE-----------------


const REMOVE_PIN = 'REMOVE_PIN'

const removePin = pinId => {
    return {
        type: REMOVE_PIN,
        pinId
    }
}

export const deletePin = (pinId) => async dispatch => {
    const res = await fetch(`api/pins/${pinId}`, {
        method: 'DELETE'
    })
    dispatch(removePin(pinId))
}

// ------------REDUCER-----------------


const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type) {
        case RECEIVE_PINS:
            return { ...nextState, ...action.pins};
        case RECEIVE_PIN:
            nextState[action.pin.id] = action.pin
            return nextState
        case ADD_PIN:
            nextState[action.pinData.id] = action.pinData
            return nextState
        case UPDATE_PIN:
            nextState[action.pinData.id] = action.pinData
            return nextState
        case REMOVE_PIN:
            delete nextState[action.pinId];
            return nextState
        default:
            return nextState;
    }
}

export default pinsReducer