import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Hero() {

    const photos = [
        { src: '/images/ttp10.jpg', width: 1, height: 1, alt: 'Photo 1' },
        { src: '/images/ttp3.jpg', width: 1, height: 1, alt: 'Photo 2' },
        { src: '/images/rabbit.jpg', width: 1, height: 1, alt: 'Photo 3' },
        { src: '/images/ttp7.jpg', width: 1, height: 1, alt: 'Photo 4' },
        { src: '/images/ttp6.jpg', width: 1, height: 1, alt: 'Photo 5' },
        { src: '/images/ttp5.jpg', width: 1, height: 1, alt: 'Photo 6' },
        { src: '/images/ttp4.jpg', width: 1, height: 1, alt: 'Photo 7' },
        { src: '/images/ttp9.jpg', width: 1, height: 1, alt: 'Photo 7' }
        // Add more photos as needed
    ];


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="mt-4 py-20 bg-gray-200">
            <div className="container mx-auto">
                {isMobile ? (
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
                        {photos.map((photo, index) => (
                            <div key={index} className="h-64">
                                <img src={photo.src} alt={photo.alt} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className={`bg-cover bg-center ${photo.width === 2 && photo.height === 2 ? 'col-span-2 row-span-2' : ''}`}
                                style={{ backgroundImage: `url(${photo.src})`, paddingBottom: `${(photo.height / photo.width) * 100}%` }}
                            ></div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}