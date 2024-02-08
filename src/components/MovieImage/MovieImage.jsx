import style from './MovieImage.module.css';

export default function MovieImage({ path, size = 200 }) {
    return (
        <figure className={style.container}>
            <img src={`https://image.tmdb.org/t/p/w${size}/${path}`} alt="" />
        </figure>
    );
};