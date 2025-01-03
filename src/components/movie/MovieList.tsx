import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import { fetcher } from '../../config';
import MovieCard from './MovieCard';
import { Movie } from '../../types/movie.type';

//https://api.themoviedb.org/3/movie/now_playing?api_key=6075752fbd41b2a4aa7b99b68e324078

const MovieList = ({ type = 'now_playing' }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6075752fbd41b2a4aa7b99b68e324078`,
    fetcher,
  );
  const movieList: Movie[] = data?.results || [];

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
