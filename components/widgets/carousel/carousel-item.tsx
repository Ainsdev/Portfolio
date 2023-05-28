import Image from "next/image";

interface props {
    title: string
    emisor: string
    image: string
    link: string
}

const CarouselItem: React.FC<props> = ({ title, emisor, image }) => {
    return (
        <div className="mx-4 h-96 w-96 bg-transparent hover:scale-110">
            <div className="bg-base-2 flex h-10  w-96 items-center justify-end space-x-1.5 rounded-t-lg px-4">
                <div className="pr-20 font-light">{emisor}</div>
                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
            </div>
            <div className="flex h-64 w-96 items-center justify-center bg-gray-700">
                <div className="bg-base-2 flex h-3/4 w-3/4 items-center justify-center rounded-lg">
                    <Image src={image} alt='Working on...' width='300' height='200' className="rounded-lg" />
                </div>
            </div>
            <div className="bg-base-2 flex h-10 w-96 items-center justify-center rounded-b-lg">
                <div className="h-1/2 w-full rounded-lg text-center font-semibold">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
