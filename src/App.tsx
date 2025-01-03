import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import 'swiper/css';
import Main from './components/layout/Main';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="*"
            element={<h1 className="text-center text-4xl font-bold text-white">Not Found</h1>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
