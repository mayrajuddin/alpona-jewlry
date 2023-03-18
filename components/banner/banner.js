import Slider from "./slider";
import BannerContent from "/public/banner-api.json";
export default function Banner() {
    return (
        <Slider content={BannerContent} />
    )
}