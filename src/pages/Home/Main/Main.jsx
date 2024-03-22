import { useEffect, useState } from 'react';
import Cards from '../../../components/Cards/Cards';
import style from './Main.module.css';
import api from '../../../api/Api';
import { useNavigate } from 'react-router';

export default function Main() {
    const [dados, setDados] = useState();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`, { replace: true });
        setSearch("");
    };


    useEffect(() => {
        async function CarregarData() {
            const { data: { results } } = await api.get('movie/popular');
            setDados(results)
        }
        CarregarData();
    }, [])

    return (
        <>
            <form className={style.container__pesquisa} onSubmit={handleSubmit}>
                <input
                    className={style.container__caixa}
                    type="text"
                    placeholder="Busque um filme"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button className={style.container__botao} type="submit">
                    Procurar
                </button>
            </form>
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