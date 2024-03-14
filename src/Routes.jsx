import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MaisAvaliados from './pages/MaisAvaliados/MaisAvaliados';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Depois do path adicionar o element={} para indicar para onde sera redirecionado */}
                <Route path='/' element={<Home />} />
                <Route path='/maisavaliados' element={<MaisAvaliados />} />
                <Route path='/' />
                <Route path='/' />
                <Route path='*' />
            </Routes>
        </Router>
    );
};