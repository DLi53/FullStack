import csrfFetch from "./csrf";

// -----------COMMENTDEX-----------------

const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export const receiveComments = comments => {
return {
  type: RECEIVE_COMMENTS,
  comments
}};

export const fetchComments = () => async dispatch => {
  const res = await csrfFetch(`/api/comments`);
  const data = await res.json();
  dispatch(receiveComments(data));
}

// ------------SHOW-----------------

const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

export const receiveComment = comment => {
return {
  type: RECEIVE_COMMENT,
  comment
}};

export const fetchComment = (commentId) => async dispatch => {
  const res = await csrfFetch(`/api/comments/${commentId}`);
  const data = await res.json();
  dispatch(receiveComment(data));
}

// ------------POST-----------------

const ADD_COMMENT = 'ADD_COMMENT'

const addComment = commentData => {
    return {
        type: ADD_COMMENT,
        commentData
    }
}
export const createComment = (commentData) => async dispatch => {

    // console.log(commentData)
    const res = await csrfFetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // console.log(res);
    // debugger

    const data = await res.json();
    dispatch(addComment(data))
}


// ------------EDIT-----------------

const UPDATE_COMMENT = 'UPDATE_COMMENT'

const updateComment = commentData => {
    return {
        type: UPDATE_COMMENT,
        commentData
    }
}

export const editComment = (commentData) => async dispatch => {
    const res = await csrfFetch(`api/comments/${commentData.id}`, {
        method: 'PATCH',
        body: JSON.stringify(commentData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    const data = await res.json();
    dispatch(updateComment(data))
}

// ------------DELETE-----------------


const REMOVE_COMMENT = 'REMOVE_COMMENT'

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

export const deleteComment = (commentId) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    })
    dispatch(removeComment(commentId))
}

// ------------REDUCER-----------------


const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type) {
        case RECEIVE_COMMENTS:
            return { ...nextState, ...action.comments};
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState
        case ADD_COMMENT:
            nextState[action.commentData.id] = action.commentData
            return nextState
        case UPDATE_COMMENT:
            nextState[action.commentData.id] = action.commentData
            return nextState
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState
        default:
            return nextState;
    }
}

export default commentsReducer