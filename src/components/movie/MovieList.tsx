import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import { fetcher } from '../../config';
import { Movie } from '../../types/movie.type';
import MovieCard from './MovieCard';

//https://api.themoviedb.org/3/movie/now_playing?api_key=6075752fbd41b2a4aa7b99b68e324078

const MovieList = ({ type = 'now_playing' }) => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6075752fbd41b2a4aa7b99b68e324078`,
    fetcher,
  );

  useEffect(() => {
    if (data && data.results) {
      setMovieList(data.results);
    }
  }, [data]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={false} spaceBetween={30} slidesPerView={4}>
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
