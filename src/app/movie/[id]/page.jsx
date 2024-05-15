import Image from "next/image";

const page = async ({ params }) => {
    const id = params.id;
    const response = await fetch(`https://cinecircleapi.azurewebsites.net/api/Movie/getMovie?id=${id}`)
    const testMovie = await response.json();

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
        <div className="w-full h-screen flex flex-col  md:flex-row justify-start bg-[#1F1D36]">
            <div className="w-full md:w-fit h-full">
                <Image width={2048} height={1080} className="w-full h-full object-cover object-center" src={`http://image.tmdb.org/t/p/original/${testMovie.posterPath}`} alt="Movie Poster" />
            </div>
            <div className="w-full md:w-max bg-red-500 h-full p-4">
                <p className="text-center text-2xl font-semibold ">{testMovie.title}</p>
            </div>
        </div>


    )
}

export default page