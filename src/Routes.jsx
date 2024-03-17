import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MaisVotados from './pages/MaisVotados/MaisVotados';
import AssistidosDoMomento from './pages/AssistidosDoMomento/AssistidosDoMomento';
import VindoAi from './pages/VindoAi/VindoAi';
import NotFound from './pages/NotFound/NotFound';
import Search from './pages/Search/Search';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Depois do path adicionar o element={} para indicar para onde sera redirecionado */}
                <Route path='/' element={<Home />} />
                <Route path='/maisvotados' element={<MaisVotados />} />
                <Route path='/assistidosdomomento' element={<AssistidosDoMomento />} />
                <Route path='/vindoai' element={<VindoAi />} />
                <Route path="search" element={<Search />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
};