import { SlDiamond } from 'react-icons/sl';
import { GiHeartEarrings } from 'react-icons/gi';
import { IoIosFlash } from 'react-icons/io';
export default function ChooseUs() {
    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div className="text-center">
                    <span className='uppercase text-sm'>highlight</span>
                    <h3 className="text-3xl capitalize py-4 ">why you choose us</h3>
                </div>
                <div className="flex justify-between gap-6 w-10/12 mx-auto mt-8">
                    {
                        chooseContent.map((content) => (
                            <div className="text-center">
                                <content.Icon size={42} className="inline" />
                                <h4 className='py-3 uppercase text-xl'>{content.title}</h4>
                                <p>{content.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
const chooseContent = [
    {
        title: "Nurturing community",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,",
        Icon: SlDiamond
    },
    {
        title: "Nurturing community",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,",
        Icon: GiHeartEarrings
    },
    {
        title: "Nurturing community",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,",
        Icon: IoIosFlash
    },
]