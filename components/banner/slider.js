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
            slidesPerView={2}
            spaceBetween={10}
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
                        <div className="">
                            <img src={slides.image} alt="" className='w-full h-[680px] relative' />
                            <div className="absolute top-1/2 left-10">
                                <p>{slides.Title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))

            }
        </Swiper>
    )
}