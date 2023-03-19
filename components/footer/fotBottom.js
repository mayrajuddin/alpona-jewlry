

export default function FotBottom() {
    return (
        <div className="py-4 text-center">
            <div className="border-y py-2">
                <ul className="menu menu-horizontal font-rubik text-[#5a5a5a]">
                    {
                        sortLinks.map(link => (
                            <li key={link.id} className="menu-item">
                                <a href={link.url} className="hover:bg-transparent hover:text-[#FFAC9A] duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="py-6 ">
                <p className="capitalize text-sm text-[#5a5a5a]">Copyright &copy;2023 mayraj uddin. All Right Reserved.</p>
                <div className="flex justify-center items-center gap-4 py-4 text-[#FFAC9A] w-40 mx-auto">
                    <img src="https://i.ibb.co/wrTMkvy/Master-Card-Logo-1979.png" alt="master card" className="h-4" />
                    <img src="https://i.ibb.co/FwCdfXw/Visa.png" alt="visa card" className="h-4" />
                    <img src="https://i.ibb.co/C2Z6vBS/paypal.png" alt="paypal" className="h-9" />
                </div>
            </div>
        </div>
    )
}
const sortLinks = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "Privacy Policy",
        url: "/"
    },
    {
        id: 3,
        name: "Terms Of Use",
        url: "/"
    },
    {
        id: 4,
        name: "Sitemap",
        url: "/"
    },
    {
        id: 5,
        name: "Contacts",
        url: "/"
    },
]