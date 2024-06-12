import Head from "next/head";
import Image from "next/image";

const page = async ({ params }) => {
    const id = params.id;
    const response = await fetch(`https://cinecircleapi.azurewebsites.net/api/Movie/getMovie?id=${id}`)
    const movie = await response.json();
    console.log(movie)

    return (
        // <div className="w-full h-full mx-auto py-8">
        //     <div className="md:flex md:items-center">
        //         <div className="w-full h-1/2" style={{ paddingBottom: '150%' }}>
        //             <Image src={`http://image.tmdb.org/t/p/original/${testMovie.posterPath}`} alt="Movie Poster" layout="fill" objectFit="cover" />
        //         </div>
        //         {/* Movie Details */}
        //         <div className="md:w-2/3 md:ml-8">
        //             <h1 className="text-3xl text-white font-bold mb-4">Movie Title</h1>
        //             <p className="text-gray-300 mb-4">Release Date: January 1, 2024</p>
        //             <p className="text-gray-300 mb-4">Genre: Action, Adventure</p>
        //             <p className="text-gray-300 mb-4">Director: John Doe</p>
        //             <p className="text-gray-300 mb-4">Rating: 8.5/10</p>
        //             <h2 className="text-xl text-white font-bold mb-2">Actors</h2>
        //             <div className="flex flex-wrap">
        //                 {/* Actor Card */}
        //                 <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
        //                     <div className="bg-gray-800 p-4 rounded-lg">
        //                         <div className="relative w-full h-0" style={{ paddingBottom: '100%' }}>
        //                             <Image src="http://image.tmdb.org/t/p/original/" alt="Actor 1" layout="fill" objectFit="cover" className="rounded-full" />
        //                         </div>
        //                         <p className="text-white mt-2">Actor Name</p>
        //                     </div>
        //                 </div>
        //                 {/* Repeat for other actors */}
        //                 <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
        //                     <div className="bg-gray-800 p-4 rounded-lg">
        //                         <div className="relative w-full h-0" style={{ paddingBottom: '100%' }}>
        //                             <Image src="http://image.tmdb.org/t/p/original/" alt="Actor 2" layout="fill" objectFit="cover" className="rounded-full" />
        //                         </div>
        //                         <p className="text-white mt-2">Actor Name</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className="w-full h-screen flex flex-col  md:flex-row justify-start bg-[#1F1D36]">
        //     <div className="w-full md:w-fit h-full">
        //         <Image width={2048} height={1080} className="w-full h-full object-cover object-center" src={`http://image.tmdb.org/t/p/original/${testMovie.posterPath}`} alt="Movie Poster" />
        //     </div>
        //     <div className="w-full md:w-max bg-red-500 h-full p-4">
        //         <p className="text-center text-2xl font-semibold ">{testMovie.title}</p>
        //     </div>
        // </div>
        <div className="w-full h-screen mx-auto px-4 py-8">
            <div className="flex h-full flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
                {/* Movie Poster */}
                <div className="w-full h-screen lg:w-1/3 mb-8  lg:mb-0 flex justify-center lg:justify-start">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                        alt={movie.title}
                        objectFit="contain"
                        width={2048}
                        height={1080}
                        className="rounded-lg shadow-lg w-ful h-full max-w-sm lg:max-w-full"
                    />
                </div>
                {/* Movie Details */}
                <div className="w-full lg:w-2/3">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">{movie.title}</h1>
                    <h3 className="text-4xl lg:text-5xl font-bold mb-4">{movie.tagline}</h3>

                    <p><span className="font-semibold">Release Year:</span> {new Date(movie.releaseDate).getFullYear()}</p>
                    <p><span className="font-semibold">Runtime:</span> {movie.runtime} minutes</p>

                    <p className="text-lg mb-2"><span className="font-semibold">Genres:</span> {movie.genres.map(genre => genre.name).join(', ')}</p>
                    <p className="text-lg mb-4">{movie.overview}</p>
                    <div className="lg:flex lg:flex-col lg:justify-between">
                        <p className="text-lg ">Cast</p>
                        <div className='w-full flex bg-[#1F1D36] custom-scrollbar gap-5 my-4 overflow-x-auto '>
                            {movie.credits.cast.map((cast, index) => (
                                <div key={index}>
                                    <div className='rounded-lg w-[140px] flex flex-col items-center gap-2'>
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w500${cast.profilePath}`}
                                            alt={cast.name}
                                            width={500}
                                            height={750}
                                            className="rounded-lg shadow-lg w-full h-full max-w-sm lg:max-w-full"
                                        />
                                        <p className='text-center text-white'>{cast.name}</p>
                                        <p className='text-center text-white'>{cast.character}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg">Crew</p>
                        <div className='w-full flex bg-[#1F1D36] custom-scrollbar gap-5 my-4 overflow-x-auto '>
                            {movie.credits.crew.map((cast, index) => (
                                <div key={index}>
                                    <div className='rounded-lg w-[120px] flex flex-col items-center gap-2'>
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w500${cast.profilePath}`}
                                            alt={cast.name}
                                            width={500}
                                            height={750}
                                            className="rounded-lg shadow-lg w-full h-full max-w-sm lg:max-w-full"
                                        />
                                        <p className='text-center text-white'>{cast.name}</p>
                                        <p className='text-center text-white'>{cast.job}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page