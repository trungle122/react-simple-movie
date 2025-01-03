import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../config';
import { MovieCredits, MovieDetail, MovieVideos, SimilarMovieList } from '../types/movie.type';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../components/movie/MovieCard';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR<MovieDetail>(tmdbAPI.getMovieDetail(movieId as string), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="pb-10">
      <div className="relative h-[600px] w-full">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="h-full w-full overflow-hidden">
          <img
            src={tmdbAPI.imageOriginal(backdrop_path)}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-[200px] mb-10 h-[400px] w-full max-w-[800px]">
        <img
          src={tmdbAPI.imageOriginal(poster_path)}
          alt=""
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <h1 className="mb-10 text-center text-4xl font-bold text-white">{title}</h1>

      {genres.length > 0 && (
        <div className="mb-10 flex items-center justify-center gap-x-5">
          {genres.map((genre) => (
            <span
              key={genre.id}
              className="rounded-md border border-primary px-4 py-2 text-primary"
            >
              {genre.name}
            </span>
          ))}
        </div>
      )}

      <p className="mx-auto mb-10 max-w-[600px] text-center leading-relaxed">{overview}</p>
      <MovieCredit />
      <MovieVideoList></MovieVideoList>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredit() {
  const { movieId } = useParams();
  const { data } = useSWR<MovieCredits>(
    tmdbAPI.getMovieMeta(movieId as string, 'credits'),
    fetcher,
  );

  if (!data) return null;
  const { cast } = data;

  return (
    <div className="py-10">
      <h2 className="mb-10 text-center text-3xl font-bold">Casts</h2>
      <div className="mx-5 grid grid-cols-4 gap-5">
        {cast.length > 0 &&
          cast.slice(0, 4).map((caster) => (
            <div className="cast-item" key={caster.id}>
              <img
                src={tmdbAPI.imageOriginal(caster.profile_path as string)}
                alt=""
                className="mb-3 h-[350px] w-full rounded-lg object-cover"
              />
              <h3 className="text-xl font-medium">{caster.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieVideoList() {
  const { movieId } = useParams();
  const { data } = useSWR<MovieVideos>(tmdbAPI.getMovieMeta(movieId as string, 'videos'), fetcher);
  if (!data) return null;
  const { results } = data;

  return (
    <div className="px-5 py-10">
      <div className="flex flex-col gap-10">
        {results.length > 0 &&
          results.slice(0, 1).map((video) => (
            <div className="" key={video.id}>
              <h3 className="bg-secondary mb-5 inline-block p-3 text-xl font-medium">
                {video.name}
              </h3>
              <div className="aspect-video w-full">
                <iframe
                  width="992"
                  height="558"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full object-fill"
                ></iframe>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR<SimilarMovieList>(
    tmdbAPI.getMovieMeta(movieId as string, 'similar'),
    fetcher,
  );
  if (!data) return null;
  const { results } = data;

  console.log(results);

  return (
    <div className="px-5 py-10">
      <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>
      <div className="movie-list">
        <Swiper grabCursor={false} spaceBetween={30} slidesPerView={4}>
          {results.length > 0 &&
            results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailPage;
