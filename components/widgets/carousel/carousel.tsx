import CarouselItem from "./carousel-item";


const Carousel = () => {
    return (
        //fancy carousel of 3 images with TailwindCSS
        <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track scrollback flex w-full flex-row overflow-scroll">
            <CarouselItem title={'Javascript Data Structure'} emisor={'FreeCodeCamp'} image={'/../public/fcc.jpeg'} link={''} />
            <CarouselItem title={'Blockchain & CryptoCurrency'} emisor={'University of Michigan'} image={''} link={''} />
            <CarouselItem title={'Basic Javascript'} emisor={'OpenBootcamp'} image={''} link={''} />
            <CarouselItem title={'NextJs'} emisor={'Fernando Herrera'} image={''} link={''} />
            <CarouselItem title={'React'} emisor={'Platzi'} image={''} link={''} />
            <CarouselItem title={'Product RoadMap'} emisor={'Crehana'} image={''} link={''} />
        </div>

    );
};

export default Carousel;
