import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import imgs from "../../../resources/img/1659665301_31.jpg";
import { SlideSection } from "../style/slideStyle";

import "swiper/css";
import "swiper/css/scrollbar";


const SlideContents = () => {
  return (
    <SlideSection.SlideFrame>
      <Swiper 
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper">
        <SwiperSlide>11111
          <div style={{ maxwidth: "47%" }}>
            <img src={imgs} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>111
          <div style={{ maxwidth: "47%" }}>
            <img src={imgs} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>2222
          <div style={{ maxwidth: "47%" }}>
            <img src={imgs} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>333
          <div style={{ maxwidth: "47%" }}>
            <img src={imgs} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </SlideSection.SlideFrame>
  );
};

export default SlideContents;
