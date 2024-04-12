import Image from 'next/image';
import Link from 'next/link'

function LoginForm() {
    return (
        <form className='max-w-[700] justify-center px-4 flex flex-col items-center h-full bg-[#1F1D36]'>
            <Image
                priority={true}
                src={"/assets/cinecircle-01.png"}
                alt='Logo'
                width={400}
                height={100}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 h-max'>
                <input
                    name="email"
                    //value={formData.email}
                    //onChange={handleChange}
                    className='bg-[#595868] outline-none sm:text-sm md:text-base lg:text-lg rounded-[30px] py-3 px-5'
                    placeholdertextcolor={"#ACACB4"}
                    type="email"
                    placeholder='Email' />
                <input
                    name="password"
                    // value={formData.password}
                    // onChange={handleChange}
                    className='bg-[#595868] outline-none sm:text-sm md:text-base lg:text-lg rounded-[30px] py-3 px-5'
                    placeholdertextcolor={"#ACACB4"}
                    type="password"
                    placeholder='Password' />
                <div className='md:col-span-2 w-full flex justify-center my-4'>
                    <button className="bg-[#E9A6A6] w-full md:w-1/2 py-3 px-5  rounded-[30px] items-center justify-center">Sign up</button>
                </div>
            </div>
            <div className='text-center'>
                Don't have an account? Please
                <Link href="/signup" className="text-[#8C4480] text-center mx-1 font-bold">Sign up</Link>
            </div>
        </form>
    )
}

export default LoginForm