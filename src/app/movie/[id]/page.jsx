import Image from "next/image";

const page = async ({ params }) => {
    const id = params.id;
    const response = await fetch(`https://cinecircleapi.azurewebsites.net/api/Movie/getMovie?id=${id}`)
    const testMovie = await response.json();

    return (
        <div className="w-screen h-screen">
            <div className="w-full h-1/3 md:h-screen" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${testMovie.backdropPath})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <p className='text-white text-2xl py-4 px-4'>{testMovie.title}</p>
            </div>
        </div>
    )
}

export default page