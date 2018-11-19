import { combineReducers } from 'redux';

const initialState = {
    list: [],
    genres: [],
    hearted: [],
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIE_LIST':
            return { ...state, list: action.list };
        case 'SET_GENRES_LIST':
            return { ...state, genres: action.genres };
        case 'ADD_HEART':
            return { ...state, hearted: [...state.hearted, action.id] };
        case 'REMOVE_HEART':
            return { ...state, hearted: action.hearted.filter((currentId) => currentId !== action.id) };
        default:
            return state;
    }
};

export default combineReducers({
    movies: moviesReducer,
});
