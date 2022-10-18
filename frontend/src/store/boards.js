import csrfFetch from "./csrf";

// ------------INDEX-----------------

const RECEIVE_BOARDS = 'RECEIVE_BOARDS'

export const receiveBoards = boards => {
return {
  type: RECEIVE_BOARDS,
  boards
}};

export const fetchBoards = (userId) => async dispatch => {
  const res = await csrfFetch(`/api/users/${userId}/boards`);
  const data = await res.json();
  dispatch(receiveBoards(data));
}

// ------------SHOW-----------------

const RECEIVE_BOARD = 'RECEIVE_BOARD'

export const receiveBoard = board => {
return {
  type: RECEIVE_BOARD,
  board
}};

export const fetchBoard = (boardId) => async dispatch => {
  const res = await csrfFetch(`/api/boards/${boardId}`);
  const data = await res.json();
  dispatch(receiveBoard(data));
}

// ------------POST-----------------

const ADD_BOARD = 'ADD_BOARD'

const addBoard = boardData => {
    return {
        type: ADD_BOARD,
        boardData
    }
}
export const createBoard = (boardData) => async dispatch => {
console.log(boardData.currentUserId);
    const res = await csrfFetch(`/api/users/${boardData.currentUserId}/boards`, {
        method: 'POST',
        body: JSON.stringify(boardData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(res);
    const data = await res.json();
    dispatch(addBoard(data))
}


// ------------EDIT-----------------

const UPDATE_BOARD = 'UPDATE_BOARD'

const updateBoard = boardData => {
    return {
        type: UPDATE_BOARD,
        boardData
    }
}

export const editBoard = (boardData) => async dispatch => {
    const res = await csrfFetch(`/api/boards/${boardData.id}`, {
        method: 'PATCH',
        body: JSON.stringify(boardData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    const data = await res.json();
    dispatch(updateBoard(data))
}

// ------------DELETE-----------------


const REMOVE_BOARD = 'REMOVE_BOARD'

const removeBoard = boardId => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}

export const deleteBoard = (boardId) => async dispatch => {
    const res = await fetch(`/api/boards/${boardId}`, {
        method: 'DELETE'
    })
    dispatch(removeBoard(boardId))
}

// ------------REDUCER-----------------


const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type) {
        case RECEIVE_BOARDS:
            return { ...nextState, ...action.boards};
        case RECEIVE_BOARD:
            nextState[action.board.id] = action.board
            return nextState
        case ADD_BOARD:
            nextState[action.boardData.id] = action.boardData
            return nextState
        case UPDATE_BOARD:
            nextState[action.boardData.id] = action.boardData
            return nextState
        case REMOVE_BOARD:
            delete nextState[action.boardId];
            return nextState
        default:
            return nextState;
    }
}

export default boardsReducer