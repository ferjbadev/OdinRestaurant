// Slider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from 'react-icons/fa';

const foodImages = [
    { src: 'image1.png	', alt: 'Party 1' },
    { src: 'image2.jpg', alt: 'Party 2' },
    { src: 'image3.png', alt: 'Party 3' },
    { src: 'image4.png', alt: 'Party 4' },
    { src: 'image5.png', alt: 'Party 5' },
    { src: 'image6.png', alt: 'Party 6' },
    { src: 'image7.png', alt: 'Party 7' },
    { src: 'image8.png', alt: 'Party 8' },
    { src: 'image9.png', alt: 'Party 9' },
    { src: 'image11.png', alt: 'Party 11' },
    { src: 'image13.png', alt: 'Party 13' },
    { src: 'image14.png', alt: 'Party 14' },
    { src: 'image15.png', alt: 'Party 15' },
];

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Contenedor del texto */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Valhalla is Calling You!!</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At our restaurant, we believe that every dish tells a story. Our chefs blend traditional techniques with innovative flavors, creating culinary masterpieces that delight the senses. From farm-fresh ingredients to artful presentation, we invite you to embark on a gastronomic adventure that celebrates the rich tapestry of flavors from around the world.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Whether you're savoring our signature dishes or exploring our seasonal specials, each bite is a testament to our passion for exceptional cuisine. Join us for an unforgettable dining experience where every meal is a celebration of taste, creativity, and the joy of sharing good food with great company.
                        </p>
                        <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Explore Our Menu
                        </button>
                    </div>
                    {/* Contenedor de imagenes */}
                    <div className="py-5 w-[50%] mx-auto">
                        <Slider {...settings}>
                            {foodImages.map((image, index) => (
                                <div key={index} className="h-[400px] overflow-hidden flex items-center justify-center">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="object-cover h-full w-full"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
