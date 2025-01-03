import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import 'swiper/css';
import Main from './components/layout/Main';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="movies" element={<MoviePage></MoviePage>}></Route>
            <Route path="movies/:movieId" element={<MovieDetailPage></MovieDetailPage>}></Route>
            <Route
              path="*"
              element={<h1 className="text-center text-4xl font-bold text-white">Not Found</h1>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
