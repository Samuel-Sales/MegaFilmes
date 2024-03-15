import { Link } from 'react-router-dom';
import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.container}>
            <h2>Mega <span>Filmes</span></h2>
            <div className={style.container__links}>
                <Link className={style.container__linkss} to='/'>Populares</Link>
                <Link className={style.container__linkss} to='/assistidosdomomento'>Assistidos do momento</Link>
                <Link className={style.container__linkss} to='/maisvotados'>Mais votados</Link>
                <Link className={style.container__linkss} to='/vindoai'>Vindo ai</Link>
            </div>
        </header>
    );
};