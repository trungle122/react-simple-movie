import { Fragment } from 'react/jsx-runtime';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { fetcher } from '../config';
import { Movie } from '../types/movie.type';

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=6075752fbd41b2a4aa7b99b68e324078`,
    fetcher,
  );
  const movieList: Movie[] = data?.results || [];

  return (
    <div className="page-container py-10">
      <div className="mb-10 flex">
        <div className="flex-1">
          <input
            type="text"
            className="w-full rounded-lg bg-slate-800 p-4 text-white outline-none"
            placeholder="Type here to search..."
          />
        </div>
        <button className="rounded-r-lg bg-primary p-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <Fragment key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
