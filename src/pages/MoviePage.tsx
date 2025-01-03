import { Fragment } from 'react/jsx-runtime';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { fetcher } from '../config';
import { Movie } from '../types/movie.type';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

//https://api.themoviedb.org/3/search/movie

const MoviePage = () => {
  const [fitler, setFitler] = useState('');
  const [url, setUrl] = useState(
    'https://api.themoviedb.org/3/movie/popular?api_key=6075752fbd41b2a4aa7b99b68e324078',
  );
  const fitlerDebounce = useDebounce(fitler, 1000);
  const handleFitlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFitler(event.target.value);
  };

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  useEffect(() => {
    if (fitlerDebounce)
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=6075752fbd41b2a4aa7b99b68e324078&query=${fitlerDebounce}`,
      );
    else
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=6075752fbd41b2a4aa7b99b68e324078`);
  }, [fitlerDebounce]);

  const movieList: Movie[] = data?.results || [];

  return (
    <div className="page-container py-10">
      <div className="mb-10 flex">
        <div className="flex-1">
          <input
            type="text"
            className="w-full rounded-lg bg-slate-800 p-4 text-white outline-none"
            placeholder="Type here to search..."
            onChange={handleFitlerChange}
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

      {loading && (
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      )}
      <div className="mb-10 grid grid-cols-4 gap-10">
        {!loading &&
          movieList.length > 0 &&
          movieList.map((movie) => (
            <Fragment key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </Fragment>
          ))}
      </div>

      <div className="flex items-center justify-center gap-x-5">
        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="inline-block cursor-pointer rounded bg-white px-4 py-2 leading-none text-slate-900">
          1
        </span>
        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
