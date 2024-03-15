import { useEffect, useState } from 'react';
import Cards from '../../../components/Cards/Cards';
import style from './Main.module.css';
import api from '../../../api/Api';

export default function Main() {
    const [dados, setDados] = useState();

    useEffect(() => {
        async function CarregarData() {
            const { data: { results } } = await api.get('movie/popular');
            setDados(results)
        }
        CarregarData();
    }, [])

    return (
        <>
            <div className={style.container__search}>
                <input className={style.search} type="text" placeholder='Encontre o seu filme' />
            </div>
            <main className={style.container__cards}>
                <div className={style.container__grid}>
                    {dados && dados.map((dado) => (
                        <Cards key={dado.id} movieData={dado} />
                    ))}
                </div>
            </main>
        </>
    );
};