import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./TopCollection.module.scss";
import { listCollection } from "./helpers";
import { SwiperPrev, SwiperNext } from "assets/svg";
import { randomId } from "common/functions";
import Heading from "components/Heading";

interface ITopProps {}

const TopCollection: React.FC<ITopProps> = () => {
  const [prevEl, setPrevEl] = useState<HTMLDivElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLDivElement | null>(null);
  return (
    <div className={styles.container}>
      <Heading center>Top Collections</Heading>
      <Swiper
        scrollbar={{ draggable: true }}
        slidesPerView={3}
        loop={true}
        navigation={{
          prevEl,
          nextEl,
        }}
        grabCursor
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1270: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {listCollection.map(({ image, name }) => (
          <SwiperSlide key={`collection-swiper-${randomId()}`}>
            <div className={styles["slide-item"]}>
              <img src={image} width={168} height={168} alt="name" />
              <p>{name}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles["swiper-prev"]} ref={setPrevEl}>
          <img src={SwiperPrev} width={50} height={50} alt="prev" />
        </div>
        <div className={styles["swiper-next"]} ref={setNextEl}>
          <img src={SwiperNext} width={50} height={50} alt="prev" />
        </div>
      </Swiper>
    </div>
  );
};

export default TopCollection;
