import Image from 'next/image';
import Link from 'next/link'

function RegisterForm() {

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.currentTarget);
    //     try {
    //         const response = await fetch('http://localhost:5141/api/Auth/register', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: formData,
    //             mode: "cors"
    //         });

    //         if (response.ok) {
    //             console.log(await response.json());
    //         } else {
    //             console.log(response);
    //         }
    //     } catch (error) {
    //         console.error('Error sending form data:', error);
    //         // Handle error
    //     }
    // }

    return (
        <form className='max-w-[700] justify-center px-4 flex flex-col items-center h-full bg-[#1F1D36]'>
            <Image
                priority={true}
                src={"/assets/cinecircle-01.png"}
                alt='Logo'
                width={400}
                height={100}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <input
                    name="email"
                    //value={formData.email}
                    //onChange={handleChange}
                    className='bg-[#595868] outline-none sm:text-sm md:text-base lg:text-lg rounded-[30px] py-3 px-5'
                    placeholdertextcolor={"#ACACB4"}
                    type="email"
                    placeholder='Email' />
                <input
                    name="username"
                    //value={formData.username}
                    //onChange={handleChange}
                    className='bg-[#595868] outline-none sm:text-sm md:text-base lg:text-lg rounded-[30px] py-3 px-5'
                    placeholdertextcolor={"#ACACB4"}
                    type="text"
                    placeholder='Username' />
                <input
                    name="password"
                    // value={formData.password}
                    // onChange={handleChange}
                    className='bg-[#595868] outline-none sm:text-sm md:text-base lg:text-lg rounded-[30px] py-3 px-5'
                    placeholdertextcolor={"#ACACB4"}
                    type="password"
                    placeholder='Password' />
                <input
                    name="passwordConfirm"
                    // value={formData.passwordConfirm}
                    // onChange={handleChange}
                    className='bg-[#595868] outline-none sm:text-sm md:text-base lg:text-lg rounded-[30px] py-3 px-5'
                    placeholdertextcolor={"#ACACB4"}
                    type="password"
                    placeholder='Confirm Password' />
                <div className='md:col-span-2 w-full flex justify-center my-4'>
                    <button className="bg-[#E9A6A6] w-full md:w-1/2 py-3 px-5  rounded-[30px] items-center justify-center">Sign up</button>
                </div>
            </div>
            <div>
                Already have an account? Please
                <Link href="/signin" className="text-[#8C4480] text-center mx-1 font-bold">Sign in</Link>
            </div>
        </form>
    )
}

export default RegisterForm