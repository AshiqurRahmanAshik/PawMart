import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
    <Swiper
      className="w-full h-32 md:h-80 object-contain"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      loop={true} // loop is needed
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          className="h-full"
          src="https://i.ibb.co.com/sd4rH3gm/photo-1541781774459-bb2af2f05b55.webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full"
          src="https://i.ibb.co.com/8LsVs9jS/photo-1581888227599-779811939961.webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full"
          src="https://i.ibb.co.com/qYkYc638/photo-1608096299230-81c7b43d5dfc.webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full"
          src="https://i.ibb.co.com/7t9Ldx4Y/photo-1534361960057-19889db9621e.webp"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
