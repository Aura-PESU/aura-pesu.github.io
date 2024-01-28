// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import EpochImg from "../assets/epoch.jpg";
import EpochWorkshopImg from "../assets/workshop.jpeg";

export default () => {
  return (
      <Swiper
        className="w-full lg:w-1/3 h-48 lg:h-96 rounded-lg text-white"
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
      >
        <SwiperSlide className="">
          <EventSlide title="Epoch 2023" src={EpochImg.src} />
        </SwiperSlide>
        <SwiperSlide className="">
          <EventSlide title="Epoch Workshop" src={EpochWorkshopImg.src} />
        </SwiperSlide>
      </Swiper>
  );
};

function EventSlide({ title, src }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center z-10">{title}</h1>
      <img
        src={src}
        className="w-full h-48 lg:h-96 object-cover text-center z-0"
        alt={title}
      />
    </div>
  );
}
