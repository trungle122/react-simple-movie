type FetcherArgs = [input: RequestInfo | URL, init?: RequestInit | undefined];
export const fetcher = async (...args: FetcherArgs) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error('API Error');
  }
  return response.json();
};

const apiKey = '6075752fbd41b2a4aa7b99b68e324078';
const tmdbEndpoint = 'https://api.themoviedb.org/3/movie';
const tmdbEndpointSearch = 'https://api.themoviedb.org/3/search/movie';
export const tmdbAPI = {
  getMovieList: (type: string, page = 1) => {
    return `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`;
  },
  getMovieDetail: (movieId: string) => {
    return `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`;
  },
  getMovieMeta: (movieId: string, type: string) => {
    return `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`;
  },

  getMovieSearch: (query: string, page = 1) => {
    return `${tmdbEndpointSearch}/?api_key=${apiKey}&query=${query}&page=${page}`;
  },
  imageOriginal: (url: string) => {
    return `https://image.tmdb.org/t/p/original/${url}`;
  },
  image500: (url: string) => {
    return `https://image.tmdb.org/t/p/w500/${url}`;
  },
};

//https://api.themoviedb.org/3/movie/${movieId}?api_key=6075752fbd41b2a4aa7b99b68e324078
//https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6075752fbd41b2a4aa7b99b68e324078
//https://image.tmdb.org/t/p/original/${poster_path}
