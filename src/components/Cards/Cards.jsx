import style from './Cards.module.css';
import fundo from '../../assets/Fundo.jpg';

export default function Cards({ movieData }) {
    return (
        <section className={style.container}>
            <div className={style.container__card}>
                <img src={fundo} alt="Imagem do filme" />
                <h3>{movieData.title}</h3>
                {/* <p>{movieData.overview}</p> */}
                <p>{movieData.release_date}</p>
            </div>
        </section>
    );
};
