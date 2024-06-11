import './MovieList.css';
import MovieCards from './MovieCards';
import vikings from '../assets/vikings.jpeg';
import peakyBlinders from '../assets/peakyblinders.jpeg';
import marginCall from '../assets/margin-call.jpeg';
import onePiece from '../assets/one-piece.jpg';
import suits from '../assets/suits.jpeg';
import succession from '../assets/succession.jpg';
import dropouts from '../assets/dropouts.jpeg';
import friends from '../assets/friends.jpeg';


const MovieList = () => {
    return (
        <>
        <h1>Movie List</h1>
        <div className="movie-list">
            <MovieCards name="Peaky Blinders" image={peakyBlinders} rating={9.5} release={2017} />
            <MovieCards name="Suits" image={suits} rating={8.7} release={2018} />
            <MovieCards name="Vikings" image={vikings} rating={9.2} release={2020} />
            <MovieCards name="Margin Call" image={marginCall} rating={7.5} release={2015} />
            <MovieCards name="Succession" image={succession} rating={7.5} release={2022} />
            <MovieCards name="One Piece" image={onePiece} rating={7.5} release={2014} />
            <MovieCards name="Dropouts" image={dropouts} rating={7.5} release={2005} />
            <MovieCards name="Friends" image={friends} rating={7.5} release={2022} />
        </div>
        </>
    )
}

export default MovieList
