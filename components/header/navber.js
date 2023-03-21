

export default function Nav() {

    return (
        <div className={` navbar text-base-100 bg-black bg-opacity-50 border-b  sticky top-0 justify-center z-50`}>
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 font-semibold">
                                <li><a className=" duration-500 bg-transparent">Submenu 1</a></li>
                                <li><a className=" duration-500 bg-transparent">Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost hover:bg-transparent font-rubik text-xl capitalize">alpona</a>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1 capitalize">
                    <li><a className=" duration-500 bg-transparent">Home</a></li>
                    <li><a className=" duration-500 bg-transparent">shop</a></li>
                    <li><a className=" duration-500 bg-transparent">blog</a></li>
                    <li><a className=" duration-500 bg-transparent">about us</a></li>
                    <li><a className=" duration-500 bg-transparent">contact us</a></li>
                </ul>
            </div>
        </div>
    )
}