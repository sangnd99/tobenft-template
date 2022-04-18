import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import Upcoming from "./components/Upcoming";

import styles from "./Banner.module.scss";

interface IBannerProps {}

const Banner: React.FC<IBannerProps> = (props) => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  return (
    <div className={cn("container", styles.container)}>
      <div className={styles.intro}>
        <h1>Buy, sell, and showcase NFTs</h1>
        <p>from leading creators and brands</p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation
        modules={[Navigation]}
        grabCursor
        className="banner-swiper"
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: (_, className) => {
            return `<span class="${className}" /></span>`;
          },
        }}
      >
        <SwiperSlide>
          <Upcoming />
        </SwiperSlide>
        <SwiperSlide>
          <Upcoming />
        </SwiperSlide>
        <SwiperSlide>
          <Upcoming />
        </SwiperSlide>
        <SwiperSlide>
          <Upcoming />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Banner;
