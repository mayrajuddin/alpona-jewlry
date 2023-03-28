import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Tranding() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="lg:h-[480px] bg-[url('https://images.unsplash.com/photo-1492714485642-dd6df6baafa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover">
            <div className="flex items-center justify-center h-full container mx-auto">
                <div data-aos="fade-right" data-aos-delay="50"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                    className="text-center ">
                    <span className='capitalize text-[#C97F5F] text-md'>sale off 10% all products</span>
                    <h3 className="text-5xl capitalize py-4 font-rubik"><b>Tranding new collection</b></h3>
                    <h4 className="text-xl capitalize">we believe that good design is always in session</h4>
                    <div className="my-8">
                        <a href="/">
                            <button className="border-2 border-[#C97F5F] hover:bg-[#C97F5F] hover:text-white px-3 py-2 uppercase">shopping now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}