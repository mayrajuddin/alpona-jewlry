export default function Newsletter() {
    return (
        <div className="bg-[url('https://i.ibb.co/r0H0sHC/earing.jpg')] bg-cover h-[450px] border-b">
            <div className="container mx-auto h-full flex items-center justify-center">
                <div className="text-center mx-auto w-1/3">
                    <h3 className="capitalize font-rubik text-3xl py-4 ">our newsletter</h3>
                    <form className="flex  py-5 justify-center">
                        <input className="py-3 px-4 mr-4 shadow-md outline-none w-64" type="email" placeholder="Email Address..." />
                        <button className="bg-[#C97F5F] py-3 px-4 uppercase text-white hover:bg-black duration-500 rounded-sm">subscribe</button>
                    </form>
                    <p className="text-sm text-[#5a5a5a]">Join our email list and be the first to hear about deals. Enter Your
                        Email Below To Be The First To Know Collections.</p>
                </div>
            </div>
        </div>
    )
}