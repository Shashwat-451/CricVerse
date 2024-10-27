import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import { apiConnector } from '../services/apiConnector';
import { APIs } from '../services/apis';
import { Buffer } from 'buffer';
function Carousel(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [image, setImage] = useState([]);
    const [images, setImagess] = useState([]);

    // Memoize the slides to prevent unnecessary re-renders
    const slides = useMemo(() => props.data, [props.data]);
    console.log("slidesss", slides);
    
    // const fetchImages = async () => {
    //     try {
    //         // if (!slides || slides.length === 0) return;
            
    //         // const result = await Promise.allSettled(
    //         //     slides.map((slide) => {
    //         //         const { imageId } = slide.story;
    //         //         console.log("imageId", slide.story.imageId);
    //         //         return apiConnector("POST", APIs.images, { imageId });
    //         //     })
    //         // );

    //         // setImagess(result);
    //         // console.log("images", result);
        
    //         const image=await axios.get("https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c551110/i.jpg",{
    //             headers:{
    //                 "rapid-api-key":"9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f",
    //                 "radpid-api-host":"cricbuzz-cricket.p.rapidapi.com",
    //             }
    //         })
    //         setImage(image)
    //     } catch (error) {
    //         console.error("Error fetching images:", error);
    //     }
    // };

    const fetchImages = async (playerId) => {
        try {
          const res = await axios.get(
            `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c232000/i.jpg`, 
            {
              headers: {
                'x-rapidapi-key': '9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f',
                'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
              },
              responseType: 'blob',  // Set response type to 'blob' to handle image data
            }
          );
      
          // Create a URL for the image blob
          const imageURL = URL.createObjectURL(res.data);
          console.log("Image URL:", res.data);
          
          // Set the image URL in state (assuming setImage is used to render the image)
          setImage(imageURL);
        } catch (error) {
          console.error(error);
        }
      };
      

    useEffect(() => {
        if (slides && slides.length > 0) {
            fetchImages();
        }
    }, [slides]);

    // Auto change slide
    useEffect(() => {
        if (slides.length > 0) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [slides.length]);

    // Handlers for manual navigation
    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };
   
//     const base64 = Buffer.from(images[0]?.value?.data?.data, 'binary').toString('base64');
// setImage(`data:image/jpeg;base64,${base64}`);

    return (
        <div style={{width:"300px",height:"100px"}} className="relative">
            {/* Carousel wrapper */}
            <div className="relative h-24 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
                            index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={slide.alt}
                        />
                        <h1 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{slide.story.hline}</h1>
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-700' : 'bg-gray-400'}`}
                        aria-current={index === activeIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => handleDotClick(index)}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrevClick}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 bg-gray-800/30 group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNextClick}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 bg-gray-800/30 group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default Carousel;
