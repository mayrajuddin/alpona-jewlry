import { FaFacebook } from 'react-icons/fa';
import { FaBeer, FcGoogle } from 'react-icons/fc';
export default function Login() {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="container mx-auto  flex items-center justify-center min-h-screen">
                <div className="rounded-lg shadow-md p-4 lg:min-w-[540px] bg-white ">
                    <div className="w-10/12 mx-auto text-4xl py-6">
                        <h4 className="font-rubik text-2xl uppercase">login</h4>
                        <p className="text-[17px] font-rubik capitalize pb-2 ">login to access your account</p>
                        <form className=" space-y-4">
                            <div className="form-control">
                                <input type="email" placeholder="Email" className="input input-bordered focus:border-[#C97F5F] focus:outline-none focus:shadow-md" />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Password" className="input input-bordered focus:border-[#C97F5F] focus:outline-none focus:shadow-md" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm" />
                                    <label for="remember" className="text-sm text-gray-400">Remember me</label>
                                </div>
                                <a className="text-sm text-[#C97F5F]" href="/">Forgot your password?</a>
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="w-full text-[20px] text-white bg-[#C97F5F] capitalize inline-block  py-1 px-4 rounded-lg">Login</button>
                            </div>
                        </form>
                        <div className="flex items-center w-full my-4">
                            <hr className="w-full text-gray-400" />
                            <p className="px-3 text-gray-400 text-sm">OR</p>
                            <hr className="w-full text-gray-400" />
                        </div>
                        <div className="">
                            <div className="flex items-center justify-center gap-4 mb-3">
                                <a href="" className='btn text-[18px] hover:bg-[#C97F5F]  border-none'>
                                    <FcGoogle className='inline mr-2' size={24} />
                                    Google
                                </a>
                                <a href="" className='btn text-[18px] hover:bg-[#C97F5F] bg-blue-600  border-none'>
                                    <FaFacebook className='inline mr-2' size={24} />
                                    Facebook
                                </a>
                            </div>
                            <p className="text-sm font-rubik text-center"> Don't have an account?
                                <a href="/register" className="ml-1 text-[#C97F5F] font-semibold">sign up now</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}