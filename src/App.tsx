import { Fragment } from 'react/jsx-runtime';
import MovieList from './components/movie/MovieList';

function App() {
  return (
    <Fragment>
      <header className="header mb-5 flex items-center justify-center gap-x-5 py-10 text-white">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>

      <section className="banner page-container mb-20 h-[400px]">
        <div className="relative h-full w-full rounded-lg">
          <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
          <img
            src="https://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
            alt=""
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute bottom-5 left-5 w-full text-white">
            <h2 className="mb-5 text-3xl font-bold">Avengers: Endgame</h2>
            <div className="mb-8 flex items-center gap-x-3">
              <span className="rounded-md border border-white px-4 py-2">Action</span>
              <span className="rounded-md border border-white px-4 py-2">Action</span>
              <span className="rounded-md border border-white px-4 py-2">Action</span>
            </div>
            <button className="bg-primary rounded-lg px-6 py-3 font-medium text-white">
              Watch now
            </button>
          </div>
        </div>
      </section>

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
