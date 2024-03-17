import { FaStar } from "react-icons/fa";
import style from './MovieCard.module.css';

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie }) => {
    return (
        <section className={style.container}>
            <div className={style.container__movie}>
                <img className={style.imagem} src={imagesURL + movie.poster_path} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>
                    <FaStar /> {movie.vote_average}
                </p>
            </div>
        </section>
    );
};

export default MovieCard;