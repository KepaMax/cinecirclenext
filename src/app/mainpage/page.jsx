import tmdb from '@/components/TMDB';
import TrendingMovies from '@/components/TrendingMovies';

const page = async () => {
    const movies = await tmdb.getTrending('movie', 'week');

    return (
        <div className='w-max h-max bg-[#1F1D36]'>
            <TrendingMovies />
            {movies.results.map((movie, index) => (
                <p key={index}>{movie.title}</p>
            ))}
        </div>
    )
}

export default page