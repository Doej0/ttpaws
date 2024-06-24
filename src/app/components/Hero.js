const Hero = () => {

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


    return (
        <section className=" mt-4 py-20 bg-gray-200">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`bg-cover bg-center ${photo.width === 2 && photo.height === 2 ? 'col-span-2 row-span-2' : ''
                                }`}
                            style={{ backgroundImage: `url(${photo.src})`, paddingBottom: `${(photo.height / photo.width) * 100}%` }}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;