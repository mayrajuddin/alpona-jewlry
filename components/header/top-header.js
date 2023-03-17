import { BsTelephone, BsCart4 } from 'react-icons/bs';
export default function TopHeader() {
    return (
        <div className="bg-[#FFC8A8] text-[#6F6877]">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center justify-between gap-3">
                        <a href="tel:+8801628649295" className="flex justify-between items-center">
                            <BsTelephone className='mr-2' /> +8801628649295 <span className='ml-2'>|</span></a>
                        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae.</p>
                    </div>
                    <div className="">
                        <div class="dropdown dropdown-hover dropdown-end">
                            <label tabindex="0" class="p-1 cursor-pointer">
                                <BsCart4 />
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
