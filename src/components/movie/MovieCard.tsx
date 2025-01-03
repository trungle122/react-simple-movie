import { useNavigate } from 'react-router-dom';
import { MovieCardProps } from '../../types/movie.type';

const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, release_date, vote_average, poster_path, id } = movie;
  const naigate = useNavigate();

  return (
    <div className="movie-card select-none rounded-lg bg-slate-800 p-3 text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="mb-5 h-[250px] w-full rounded-lg object-cover"
      />
      <h3 className="mb-3 line-clamp-1 text-xl font-bold text-white" title={title}>
        {title}
      </h3>
      <div className="mb-10 flex items-center justify-between text-sm opacity-50">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average.toFixed(1)}</span>
      </div>
      <button
        className="w-full rounded-lg bg-primary px-6 py-3 capitalize"
        onClick={() => {
          naigate(`/movies/${id}`);
        }}
      >
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
