import Link from 'next/link';
import tmdb from './TMDB';

const TrendingMovies = async () => {
  try {
    const response = await fetch("https://cinecircleapi.azurewebsites.net/api/Movie/getTrendingMovies");
    const movies = await response.json();

    return (
      <>
        <h2 className='text-2xl text-center md:text-left font-medium '>Popular this week</h2>
        <div
          className='custom-scrollbar w-full h-full my-4 overflow-y-scroll  grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' // Tailwind classes for grid layout
        >
          {movies.map((movie, index) => (
            <Link href={`/movie/${movie.id}`} key={index}>
              <div className='rounded-lg flex flex-col items-center gap-2  '>
                <img
                  className='rounded-lg w-full h-48 object-cover' // Tailwind classes for image
                  src={`http://image.tmdb.org/t/p/original/${movie.backdropPath}`}
                  alt='Movie Poster'
                />
                <p className='text-center text-white'>{movie.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
    return (
      <>
        <h2></h2>
      </>
    );
  }
};

export default TrendingMovies;
