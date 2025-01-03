import useSWR from 'swr';
import { fetcher } from '../../config';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Movie } from '../../types/movie.type';

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6075752fbd41b2a4aa7b99b68e324078`,
    fetcher,
  );
  const movieList: Movie[] = data?.results || [];

  return (
    <section className="banner page-container mb-20 h-[500px] overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={'auto'}>
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <BannerItem movie={movie}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ movie }: { movie: Movie }) {
  const { title, poster_path } = movie;

  return (
    <div className="relative h-full w-full rounded-lg">
      <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="h-full w-full rounded-lg object-cover"
      />
      <div className="absolute bottom-5 left-5 w-full text-white">
        <h2 className="mb-5 text-3xl font-bold" title={title}>
          {title}
        </h2>
        <div className="mb-8 flex items-center gap-x-3">
          <span className="rounded-md border border-white px-4 py-2">Action</span>
          <span className="rounded-md border border-white px-4 py-2">Action</span>
          <span className="rounded-md border border-white px-4 py-2">Action</span>
        </div>
        <button className="rounded-lg bg-primary px-6 py-3 font-medium text-white">
          Watch now
        </button>
      </div>
    </div>
  );
}

export default Banner;
