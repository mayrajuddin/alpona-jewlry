import FotBottom from "./fotBottom";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
export default function Footer() {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="container mx-auto">
                <div className="py-9">
                    <div className="flex justify-between items-baseline gap-4">
                        <div className="w-2/12">
                            <h3 className="text-3xl capitalize font-rubik"> <b>alpona</b> <br /> <span className="ml-4 text-xl">jewlry</span></h3>
                            <div className="flex items-center gap-3 mt-7">
                                <a href="" className="border  rounded-full p-2 hover:bg-[#C97F5F] hover:text-white text-[#C97F5F] duration-500"> <FaFacebook size={23} className="" /> </a>
                                <a href="" className="border rounded-full p-2 hover:bg-[#C97F5F] hover:text-white text-[#C97F5F] duration-500"> <FaYoutube size={23} className="" /> </a>
                                <a href="" className="border rounded-full p-2 hover:bg-[#C97F5F] hover:text-white text-[#C97F5F] duration-500">
                                    <FaInstagram size={24} className="" />
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <h5 className="mb-5 font-semibold uppercase">Information</h5>
                            <ul className="menu-vertical space-y-2">
                                <li><a href="/" className="hover:text-[#C97F5F] duration-500 bg-transparent">About Us</a></li>
                                <li><a href="/" className="hover:text-[#C97F5F] duration-500 bg-transparent">Blog</a></li>
                                <li><a href="/" className="hover:text-[#C97F5F] duration-500 bg-transparent">Contact</a></li>
                                <li><a href="/" className="hover:text-[#C97F5F] duration-500 bg-transparent">Services</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h5 className="mb-5 font-semibold uppercase">HELP</h5>
                            <ul className="menu-vertical capitalize space-y-2">
                                <li><a href="/" className="hover:text-[#C97F5F] duration-500 bg-transparent">FAQ</a></li>
                                <li><a href="/" className="hover:text-[#C97F5F] duration-500 bg-transparent">Delivery & Returns</a></li>
                                <li><a href="/" className="hover:text-[#C97F5F] duration-500 bg-transparent">Report Abuse</a></li>
                                <li><a href="/" className="hover:text-[#C97F5F] duration-500 bg-transparent">Help center</a></li>
                            </ul>
                        </div>
                        <div className="space-y-2 ">
                            <h5 className="mb-5 font-semibold uppercase">About alpona</h5>
                            <address> 123 Main Street, Mirsarai, CA 12345  BAN.</address>
                            <ul className="menu-item space-y-2">
                                <li><a href="+8801654856641" className="">Phone: (012) 800 456 789</a></li>
                                <li><a href="mailto:mayrajuddin03@gmail.com" >Email: mayrajuddin03@gmail.com </a></li>
                            </ul>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <FotBottom />
            </div>
        </div>
    )
}

