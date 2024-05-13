import Link from 'next/link';
import tmdb from './TMDB'

const TrendingMovies = async () => {
    try {
        const response = await fetch("https://cinecircleapi.azurewebsites.net/api/Movie/getTrendingMovies");
        const movies = await response.json();
        return (
            <>
                <h2 className='text-2xl font-medium '>Popular this week</h2>
                <div className='w-full flex bg-[#1F1D36] custom-scrollbar gap-5 my-4 overflow-x-auto '>
                    {movies.map((movie, index) => (
                        <Link href={`/movie/${movie.id}`} key={index}>
                            <div className='rounded-lg w-[260px] flex flex-col items-center gap-2'>
                                <img
                                    className='rounded-lg'
                                    src={`http://image.tmdb.org/t/p/original/${movie.backdropPath}`}
                                    alt='Movie Poster'
                                />
                                <p className='text-center text-white'>{movie.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    } catch (error) {
        console.log(error)
        return (
            <>
                <h2 className='text-2xl font-medium '></h2>
            </>
        )
    }


}

export default TrendingMovies