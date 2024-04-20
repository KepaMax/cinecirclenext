import Image from 'next/image';
import tmdb from './TMDB'

const TrendingMovies = async () => {
    // const movies = await tmdb.getTrending("movie", "day");

    // return (
    //     <div className='w-max bg-[#1F1D36]'>{movies.results.map((movie, index) => {
    //         <div className='rounded-lg flex-col gap-2'>
    //             <Image
    //                 priority={true}
    //                 src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    //                 alt='Logo'
    //                 width={400}
    //                 height={100}
    //             />
    //             <span>{movie.title}</span>
    //         </div>
    //     })}</div>
    // )
    const movies = await tmdb.getTrending('movie', 'week');

    return (
        <div className='w-max h-max bg-[#1F1D36]'>
            {movies.results.map((movie, index) => (
                <p key={index}>{movie.title}</p>
            ))}
        </div>
    )
}

export default TrendingMovies