// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
      className='w-80 lg:w-1/3 h-48 lg:h-96 bg-green-700 rounded-lg text-white'
      modules={[Pagination, A11y, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
    >
      <SwiperSlide className='p-8'>Epoch</SwiperSlide>
      <SwiperSlide className='p-8'>Epoch Workshop</SwiperSlide>
    </Swiper>
  );
};
