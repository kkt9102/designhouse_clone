import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { SlideSection } from "../style/slideStyle";
import images from "../../../resources/img/img";

import "swiper/css";
import "swiper/css/scrollbar";
import "../style/style.css";

const SlideItems = [
  {
    id: 1,
    img: `${images.slide_img_1}`,
    title: "디자인하우스 숍",
    sub_tit: "당신만의 라이프스트알 편집 숍",
  },
  {
    id: 2,
    img: `${images.slide_img_1}`,
    title: "디자인하우스 숍",
    sub_tit: "당신만의 라이프스트알 편집 숍",
  },
];

const FirstContents = [
  {
    id: 1,
    type: "1",
    title: "2022 한국 디자인 연감",
    contents: "자부한다. 현재 대한민국에서 이처럼 수많은 디자이너, 다양한 분야의 디자인 결과물을 해마다 한 권의 책으로 집대성한 프로젝트는 <한국 디자인 연감> 밖에 없다고,"
  },
  {
    id: 2,
    type: "2",
    title: "PEARL ON THE TABLE",
    contents: "테이블 위에 올려진 손을 더욱 화사하게 빛내줄 패션 브랜드의 진주 주얼리"
  }
]

const SlideContents = () => {
  return (
    <SlideSection.SlideFrame>
      <Swiper
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        {SlideItems.length >= 2 ? (
          SlideItems.map((items, index) => (
            <SwiperSlide key={index}>
              <div className="img_box relative">
                <img src={items.img} alt="" />
                <a href="javascript:void(0)" className="absolute">
                  <div className="title">{items.title}</div>
                  <div className="sub_tit">{items.sub_tit}</div>
                </a>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="img_box relative">
              <img src={SlideItems[0].img} alt="" />
              <a href="javascript:void(0)" className="absolute">
                <div className="title">{SlideItems[0].title}</div>
                <div className="sub_tit">{SlideItems[0].sub_tit}</div>
              </a>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      <div>111</div>
    </SlideSection.SlideFrame>
  );
};

export default SlideContents;
