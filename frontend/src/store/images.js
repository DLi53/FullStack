import csrfFetch from "./csrf";

// ------------INDEX-----------------

const RECEIVE_IMAGES = 'RECEIVE_IMAGES'

export const receiveImages = images => {
return {
  type: RECEIVE_IMAGES,
  images
}};

export const fetchImages = () => async dispatch => {
  const res = await csrfFetch(`api/images`);
  const data = await res.json();
  dispatch(receiveImages(data));
}

// ------------SHOW-----------------

const RECEIVE_IMAGE = 'RECEIVE_IMAGE'

export const receiveImage = image => {
return {
  type: RECEIVE_IMAGE,
  image
}};

export const fetchImage = (imageId) => async dispatch => {
  const res = await csrfFetch(`api/images/${imageId}`);
  const data = await res.json();
  dispatch(receiveImage(data));
}

// ------------POST-----------------

const ADD_IMAGE = 'ADD_IMAGE'

const addImage = imageData => {
    return {
        type: ADD_IMAGE,
        imageData
    }
}
export const createImage = (imageData) => async dispatch => {
    const res = await fetch(`api/images`, {
        method: 'POST',
        body: JSON.stringify(imageData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    dispatch(addImage(data))
}


// ------------EDIT-----------------

const UPDATE_IMAGE = 'UPDATE_IMAGE'

const updateImage = imageData => {
    return {
        type: UPDATE_IMAGE,
        imageData
    }
}

export const editImage = (imageData) => async dispatch => {
    const res = await csrfFetch(`api/images/${imageData.id}`, {
        method: 'PATCH',
        body: JSON.stringify(imageData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    const data = await res.json();
    dispatch(updateImage(data))
}

// ------------DELETE-----------------


const REMOVE_IMAGE = 'REMOVE_IMAGE'

const removeImage = imageId => {
    return {
        type: REMOVE_IMAGE,
        imageId
    }
}

export const deleteImage = (imageId) => async dispatch => {
    const res = await fetch(`api/images/${imageId}`, {
        method: 'DELETE'
    })
    dispatch(removeImage(imageId))
}

// ------------REDUCER-----------------


const imagesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type) {
        case RECEIVE_IMAGES:
            return { ...nextState, ...action.images};
        case RECEIVE_IMAGE:
            nextState[action.image.id] = action.image
            return nextState
        case ADD_IMAGE:
            nextState[action.imageData.id] = action.imageData
            return nextState
        case UPDATE_IMAGE:
            nextState[action.imageData.id] = action.imageData
            return nextState
        case REMOVE_IMAGE:
            delete nextState[action.imageId];
            return nextState
        default:
            return nextState;
    }
}

export default imagesReducer