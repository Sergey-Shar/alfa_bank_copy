import { memo, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardOffers from "../CardOffers";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CARDS } from "../../сonstants/Cards";
import "./styles.css";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

interface Props {
  dataType: string;
}

const CardOffersSwiper: FC<Props> = ({ dataType }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {CARDS.map((card) => {
          return (
            card.name === dataType && (
              <SwiperSlide key={card.id}>
                <CardOffers
                  title={card.title}
                  subTitle={card.subTitle}
                  list={card.list}
                  list2={card.list2}
                  image={card.image}
                />
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
    </>
  );
};

export default memo(CardOffersSwiper);
