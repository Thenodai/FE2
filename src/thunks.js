import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList, setGenresList, setLogs } from './actions';

export const getPopularMovies = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => dispatch(setGenresList(res.data.genres)))
        .catch((error) => console.log(error));
};

export const getMoviesByGenre = (genre, logs) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(genre.id))
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};
