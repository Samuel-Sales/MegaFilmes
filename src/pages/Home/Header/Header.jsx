import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.container}>
            <h2>Mega <span>Filmes</span></h2>
            <div className={style.container__links}>
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
                <p>Link 4</p>
            </div>
        </header>
    );
};