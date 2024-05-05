import tmdb from '@/components/TMDB';
import TrendingMovies from '@/components/TrendingMovies';

const page = () => {

    const fetchMovies = async (text) => {
        const data = await tmdb.search({
            type: 'movie',
            query: "avengers"
        })
        console.log(data)
        return data;
    }
    const handleChange = async (e) => {
        const text = e.target.value;
        const result = await fetchMovies(text, 1);
        console.log(result)
    }

    return (
        <div className='w-screen h-screen p-4 bg-[#1F1D36] overflow-hidden'>
            <TrendingMovies />
            <div className="relative">
                <input
                    type="text"
                    className="bg-gray-800 text-white focus:outline-none focus:shadow-outline border border-gray-700 rounded-lg py-2 pl-10 pr-4 block w-full appearance-none leading-normal"
                    placeholder="Search Movies"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                    <svg className="fill-current h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.52 13.16l3.6 3.6c.2.2.2.51 0 .71l-1.22 1.22c-.2.2-.51.2-.71 0l-3.6-3.6a8 8 0 1 1 1.92-1.92zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default page