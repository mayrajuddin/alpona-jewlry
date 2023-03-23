import { Swiper, SwiperSlide, A11y } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";
import Styles from '../../styles/Banner.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "swiper/css/pagination";
export default function Slider({ content }) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            autoplay
            modules={[Mousewheel, Pagination]}
            className="mySwiper">
            {
                content.map((slides) => (
                    <SwiperSlide key={slides.image} >
                        <div className={`${Styles.slidesContent} relative`}>
                            <img src={slides.image} alt="" className='w-full h-[680px] relative' />
                            <div className="w-1/2 text-white absolute top-1/2 left-10 -translate-y-1/2 z-10">
                                <h1 className='text-3xl capitalize py-3'>THE LONGEST SERVING JEWELLER IN THE BANGLADESH</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, deleniti voluptas maxime distinctio commodi, praesentium aliquid alias cumque nulla officia eius ex recusandae.</p>
                                <a href="" className='border border-[#FFAC9A] p-4 mt-3 inline-block rounded-sm uppercase hover:bg-[#FFAC9A] duration-500 '>shop now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}