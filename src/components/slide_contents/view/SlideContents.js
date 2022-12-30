import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { SlideSection } from "../style/slideStyle";
import images from "../../../resources/img/img";

const SlideContents = () => {
  return(
    <SlideSection.SlideFrame>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img_box relative">
            <img src={images.slide_img_1} alt=""/>
          </div>
        </SwiperSlide>
      </Swiper>
    </SlideSection.SlideFrame>
  ) 
}

export default SlideContents;