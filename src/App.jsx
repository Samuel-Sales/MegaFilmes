import { useEffect, useState } from "react";
import api from "./api/api";
import Header from "./pages/Home/Header/Header";
import Main from "./pages/Home/Main/Main";
import Footer from "./pages/Home/Footer/Footer";

export default function App() {
    // const [dados, setDados] = useState();

    // useEffect(() => {
    //     async function CarregarData() {
    //         const { data: { results } } = await api.get('movie/popular');
    //         console.log(results);
    //         setDados(results)
    //     }
    //     CarregarData();
    // }, [])

    return (
        <>
            <Header />
            <Main />
            <Footer />
            {/* {dados && dados.map((dado) => (
                <p key={dado.id}>
                    {dado.title}
                    {dado.overview}
                </p>
            ))} */}
        </>
    );
};