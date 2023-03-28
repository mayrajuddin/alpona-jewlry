import Styles from "../../styles/categories.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Categories() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="py-9">
            <div className="container mx-auto">
                <div data-aos="fade-up-right" data-aos-delay="50" data-aos-duration="700"
                    data-aos-easing="ease-in-out">
                    <div className="">
                        <h3 className="capitalize text-3xl font-rubik text-center py-4">shop by collections</h3>
                    </div>
                    <div className="w-10/12 mx-auto flex gap-4">
                        <CategoriesContent img={"https://listany-prod.s3.amazonaws.com/images/Diamond-World/p060m"} name={"locket"} />
                        <CategoriesContent
                            img={"https://images.unsplash.com/photo-1586104195538-050b9f74f58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                            name={"ring"} />
                        <CategoriesContent img={"https://images.unsplash.com/photo-1589128784765-a69d61ed9c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} name={"necless"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
const CategoriesContent = (props) => {
    return (
        <a href="" className={`border bg-[#E6E8EA] relative w-[384px] duration-500 ease-in  h-[240px] overflow-hidden ${Styles.category} rounded`}>
            <img src={props.img} alt="" className="h-full w-full duration-500 ease-in-out" />
            <div className={`${Styles.categoryContent} absolute top-0 `}>
                <div className="p-4">
                    <h4 className="uppercase text-xl font-rubik font-semibold pt-3 text-[#C97F5F] ">{props.name}</h4>
                </div>
            </div>
        </a>
    )
}