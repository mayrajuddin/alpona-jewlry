import { BsTelephone, BsCart4, BsSuitHeart } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
export default function TopHeader() {
    return (
        <div className="bg-white text-[#6F6877] border-b border-[#ebebeb]">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between gap-3 text-sm">
                        <a href="tel:+8801628649295" className="flex justify-between items-center">
                            <BsTelephone className='mr-2' /> +8801628649295 <span className='ml-2'>|</span></a>
                        <p className="">Street 12345 - BAN</p>
                    </div>
                    <div className="">
                        <ul className='menu-horizontal items-center capitalize'>
                            <li className="inline-block mr-3">
                                <a href="#" className="hover:text-[#C97F5F] duration-500">
                                    <span> <BsSuitHeart className='inline mr-1' size={14} /> </span>wishlist
                                </a>
                                <span className='mr-2'> |</span>
                            </li>
                            <li>
                                <div className="dropdown dropdown-hover dropdown-end py-2 text-sm">
                                    <label tabindex="0" className="cursor-pointer hover:text-[#C97F5F] duration-500">
                                        My Account
                                        <span><RiArrowDownSLine className='inline ml-1' /></span>
                                    </label>
                                    <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52 capitalize">
                                        <li><a className='w-full hover:text-[#C97F5F] duration-500 bg-transparent'>profile</a></li>
                                        <li><a className='w-full hover:text-[#C97F5F] duration-500 bg-transparent'>Cart</a></li>
                                        <li><a className='w-full hover:text-[#C97F5F] duration-500 bg-transparent'>Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
