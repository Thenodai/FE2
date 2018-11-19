import React from 'react';
import { connect } from 'react-redux';
import { setGenresList } from '../actions';
import { getGenres } from '../thunks';

class Genres extends React.Component {
    componentDidMount() {
        const { onGetGenres } = this.props;
        onGetGenres();
    }

    render() {
        const { genres, onChangeList } = this.props;
        return (
            <div className="genres">
                {genres.map((genre) => (
                    <div key={genre.id} className="genre" onClick={() => onChangeList(genre)}>
                        {genre.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            genres: state.movies.genres,
        };
    },
    (dispatch) => {
        return {
            onGetGenres: () => dispatch(getGenres()),
            onSetGenreList: (genres) => dispatch(setGenresList(genres)),
        };
    },
)(Genres);
