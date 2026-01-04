import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "../../axios/AxiosData";
import "swiper/css";
import "swiper/css/navigation";



export default function Slider() {
  const [images, setImages] = useState([]);

  const history = useHistory();

  useEffect(() => {
   setImages(Object.values(data.home.slidePhotos2));
  }, []);

  return (
  <div className="relative w-full h-250 sm:h-170 bg-white overflow-hidden">
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      loop
      className="w-full h-full"
    >
      {images.map((img) => (
        <SwiperSlide
          key={img.id}
          className="relative w-full h-full"
        >
            <img
            src={img.img_url}
            alt={img.title}
            className="absolute w-full h-500 object-cover sm:hidden"
            style={{
              objectPosition:
                img.id === 1 ? "80% bottom" : "10% bottom",
            }}
          />

          <img
            src={img.img_url}
            alt={img.title}
            className="absolute bottom-0 left-0 w-full h-137.5 sm:h-170 object-cover"
            style={{
              objectPosition:
                img.id === 1 ? "80% bottom" : "85% 35%",
            }}
          />


          <div className="absolute inset-0 z-20 flex flex-col sm:justify-center items-center md:items-start sm:py-0 py-35 px-6 md:pl-20 lg:pl-40 text-white">
            <h4 className="text-xl md:text-2xl font-bold mb-4">
              SUMMER 2020
            </h4>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-xl text-center md:text-left mb-6">
              {img.title}
            </h1>

            <p className="text-lg max-w-md text-center md:text-left mb-6">
              {img.paragraph}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              {img.price && (
                <p className="text-xl font-bold">{img.price}</p>
              )}

              <button
                onClick={() => history.push(img.product_url)}
                className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-md text-lg"
              >
                {img.button_title}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);


}