import Styles from "../../styles/categories.module.css";

export default function Categories() {
    return (
        <div className="py-9">
            <div className="container mx-auto">
                <div className="">
                    <h3 className="capitalize text-3xl font-rubik text-center py-4">shop by collections</h3>
                </div>
                <div className="w-9/12 mx-auto flex gap-4">
                    <CategoriesContent />
                    <CategoriesContent />
                    <CategoriesContent />
                </div>
            </div>
        </div>
    )
}
const CategoriesContent = () => {
    return (
        <a href="" className={`border bg-[#E6E8EA] relative w-[374px]  h-[240px] overflow-hidden ${Styles.category}`}>
            <img src="https://listany-prod.s3.amazonaws.com/images/Diamond-World/p060m" alt="" className="h-full w-full" />
            <div className="absolute top-1/4 px-4 category-content">
                <h4>Locket</h4>
            </div>
        </a>
    )
}