import { useEffect, useState } from 'react';
import style from './VindoAi.module.css';
import api from '../../api/Api';
import Cards from '../../components/Cards/Cards';

export default function VindoAi() {
    const [dados, setDados] = useState();

    useEffect(() => {
        async function CarregarData() {
            const { data: { results } } = await api.get('movie/upcoming');
            setDados(results)
        }
        CarregarData();
    }, [])

    return (
        <>
            <h2 className={style.titulo}>Os filmes mais assistidos do momento</h2>
            <section className={style.container__cards}>
                <div className={style.container__grid}>
                    {dados && dados.map((dado) => (
                        <Cards key={dado.id} movieData={dado} />
                    ))}
                </div>
            </section>
        </>
    );
};