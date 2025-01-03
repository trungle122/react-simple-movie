import { Fragment } from 'react/jsx-runtime';
import MovieList from '../components/movie/MovieList';
import Banner from '../components/banner/Banner';

const HomePage = () => {
  return (
    <Fragment>
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
};

export default HomePage;
