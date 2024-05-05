'use client'
import tmdb from '@/components/TMDB';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const page = () => {
    const params = useSearchParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        const getMovie = async () => {
            data = await tmdb.movie(params.get("id"));
            setMovie(data);
        }
        getMovie();
    }, [])

    return (
        <div>
            <p className='text-white py-4 px-4'>{movie.title}</p>
        </div>
    )
}

export default page