import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/movies'>
                        <Route index element={<MoviePage />} />
                        <Route path=':id' element={<MovieDetailPage />} />
                    </Route>
                </Route>

                {/* 위의 route를 제외한 path들 ... */}
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
