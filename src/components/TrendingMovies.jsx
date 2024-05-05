import Link from 'next/link';
import tmdb from './TMDB'

const TrendingMovies = async () => {
    const movies = await tmdb.getTrending('movie', 'week');

    return (
        <>
            <h2 className='text-2xl font-medium '>Popular This Week</h2>
            <div className='w-full flex bg-[#1F1D36] custom-scrollbar gap-5 my-4 overflow-x-auto '>
                {movies.results.map((movie, index) => (
                    <Link href={`/movie?id=${movie.id}`} key={index}>
                        <div className='rounded-lg w-[260px] flex flex-col items-center gap-2'>
                            <img
                                className='rounded-lg'
                                src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt='Movie Poster'
                            />
                            <p className='text-center text-white'>{movie.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default TrendingMovies