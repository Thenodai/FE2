export const setMovieList = (list) => ({
    type: 'SET_MOVIE_LIST',
    list,
});

export const setGenresList = (genres) => ({
    type: 'SET_GENRES_LIST',
    genres,
});

export const addHeart = (hearted, id) => ({
    type: 'ADD_HEART',
    hearted,
    id,
});

export const removeHeart = (hearted, id) => ({
    type: 'REMOVE_HEART',
    hearted,
    id,
});
