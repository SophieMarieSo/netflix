import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/Movies/MoviesPage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* 1. 홈페이지 - /*/}
      {/* 2. 영화 전체 페이지 (서치) - /movies?q= */}
      {/* 3. 영화 상세 페이지 - /movies/:id ` */}
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='movies'>
          <Route index element={<MoviesPage />} />
          <Route path=':id' element={<MovieDetailPage />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
