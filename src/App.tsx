import { Fragment } from 'react/jsx-runtime';
import MovieList from './components/movie/MovieList';
import Banner from './components/banner/Banner';
import 'swiper/css';

function App() {
  return (
    <Fragment>
      <header className="header mb-5 flex items-center justify-center gap-x-5 py-10 text-white">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>

      <Banner></Banner>

      <section className="movie-layout page-container pb-20">
        <h2 className="mb-10 text-3xl font-bold capitalize text-white">Now playing</h2>
        <MovieList></MovieList>
      </section>

      <section className="movie-layout page-container pb-20">
        <h2 className="mb-10 text-3xl font-bold capitalize text-white">Top rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movie-layout page-container pb-20">
        <h2 className="mb-10 text-3xl font-bold capitalize text-white">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
