import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { setMovieList, addHeart, removeHeart } from '../actions';
import { getPopularMovies, getMoviesByGenre } from '../thunks';

class App extends React.Component {
    componentDidMount() {
        const { onGetPopularMovies } = this.props;
        onGetPopularMovies();
    }

    render() {
        const {
            movies,
            hearted,
            onGetMoviesByGenre,
            onMovieLiked,
            onMovieUnliked,
        } = this.props;

        return (
            <React.Fragment>
                <Genres onChangeList={onGetMoviesByGenre}/>

                <div className="cards">
                    {movies.map((movie) => (
                        <Card
                            key={movie.id}
                            isHearted={hearted.includes(movie.id)}
                            onAddHeart={() => onMovieLiked(hearted, movie.id)}
                            onRemoveHeart={() => onMovieUnliked(hearted, movie.id)}
                            movie={movie}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state) => {
        return {
            movies: state.movies.list,
            hearted: state.movies.hearted,
        };
    },
    (dispatch) => {
        return {
            onGetPopularMovies: () => dispatch(getPopularMovies()),
            onGetMoviesByGenre: (genre, logs) => dispatch(getMoviesByGenre(genre, logs)),
            onSetMovieList: (list) => dispatch(setMovieList(list)),
            onMovieLiked: (hearted, id) => dispatch(addHeart(hearted, id)),
            onMovieUnliked: (hearted, id) => dispatch(removeHeart(hearted, id)),
        };
    },
)(App);
