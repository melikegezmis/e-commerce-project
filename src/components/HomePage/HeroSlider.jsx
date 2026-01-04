import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "/src/axios/AxiosData";
import "swiper/css";
import "swiper/css/navigation";



export default function HeroSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [images, setImages] = useState([]);

  const history = useHistory();

  useEffect(() => {
   setImages(Object.values(data.home.slidePhotos1));
  }, []);

  return (
    <div className="max-w-full relative">
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="relative">
            <img
                src={img.img_url}
                alt={`Slide ${i + 1}`}
                className="w-full h-185 object-cover"
                style={{ objectPosition: "center 45%" }}
              />

              <div className="absolute inset-0 z-10"></div>

              <div className="text-white absolute inset-0 flex flex-col md:items-start items-center justify-center z-20 md:pl-20 lg:ml-40">
                <h4 className=" md:text-2xl text-xl font-bold">
                  SUMMER 2020
                </h4>

                <h1 className="sm:text-6xl text-5xl font-bold text-center py-10">
                  {img.title}
                </h1>

                <p className="lg:w-1/4 w-2/4 md:self-start self-center text-lg text-center md:text-left px-5 sm:px-0 pb-7">
                  {img.paragraph}
                </p>

                <div className="flex sm:flex-row flex-col gap-5 items-center">
                  {img.price && <p className="text-xl font-bold">{img.price}</p>}
                  <button className="text-2xl bg-green-500 px-5 py-3 rounded-md"
                    onClick={() => history.push(img.product_url)}>
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
