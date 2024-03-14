import AppRoutes from "./Routes";

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
            <AppRoutes />
            {/* {dados && dados.map((dado) => (
                <p key={dado.id}>
                    {dado.title}
                    {dado.overview}
                </p>
            ))} */}
        </>
    );
};