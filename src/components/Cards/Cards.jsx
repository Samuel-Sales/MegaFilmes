import style from './Cards.module.css';
import fundo from '../../assets/Fundo.jpg';
import MovieImage from '../MovieImage/MovieImage';

export default function Cards({ movieData }) {
    return (
        <section className={style.container}>
            <div className={style.container__card}>
                <MovieImage path={movieData.poster_path} />
                <div className={style.descricao}>
                    <h3>{movieData.title}</h3>
                    {/* <p>{movieData.overview}</p> */}
                    <p>{movieData.release_date}</p>
                </div>
            </div>
        </section>
    );
};
