import { useEffect, useState } from "react";
import api from "../../api/Api";
import Cards from '../../components/Cards/Cards';
import style from './AssistidosDoMomento.module.css';
import { Link } from "react-router-dom";

export default function AssistidosDoMomento() {
    const [dados, setDados] = useState();

    useEffect(() => {
        async function CarregarData() {
            const { data: { results } } = await api.get('movie/now_playing');
            setDados(results)
        }
        CarregarData();
    }, [])

    return (
        <>
            <h2 className={style.titulo}>Os filmes mais assistidos do momento</h2>
            <section className={style.container__cards}>
                <Link className={style.botao__inicial} to='/'>Página Inicial</Link>
                <div className={style.container__grid}>
                    {dados && dados.map((dado) => (
                        <Cards key={dado.id} movieData={dado} />
                    ))}
                </div>
            </section>
        </>
    );
};