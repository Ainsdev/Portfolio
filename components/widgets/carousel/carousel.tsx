import CarouselItem from "./carousel-item";


const Carousel = () => {
    return (
        //fancy carousel of 3 images with TailwindCSS
        <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track scrollback flex w-full flex-row overflow-scroll">
            <CarouselItem title={'Javascript Data Structure'} emisor={'FreeCodeCamp'} image={'/../public/fcc.jpeg'} link={''} />
            <CarouselItem title={'Blockchain & CryptoCurrency'} emisor={'University of Michigan'} image={'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D26WPSXXEXVB/CERTIFICATE_LANDING_PAGE~D26WPSXXEXVB.jpeg'} link={''} />
            <CarouselItem title={'Basic Javascript'} emisor={'OpenBootcamp'} image={'/../public/js.jpeg'} link={''} />
            <CarouselItem title={'NextJs'} emisor={'Fernando Herrera'} image={''} link={''} />
            <CarouselItem title={'React'} emisor={'Platzi'} image={''} link={''} />
            <CarouselItem title={'Product RoadMap'} emisor={'Crehana'} image={'/../public/roadmap.jpeg'} link={''} />
        </div>

    );
};

export default Carousel;
