import styled from "styled-components";
import images from "../../../resources/img/img";

export const SlideSection = {
  SlideFrame:styled.div`
    position:relative; display: flex; max-width: 53%; margin-top:-75px; margin-left:-5%; z-index: 1;
      .img_box {
        &::before {content:""; position:absolute; width:100%; height:100%; left:0; background:url(${images.slide_bg}); z-index:2;}
        a {display:block; top:30.3%; left:10.8%; z-index: 2;
          .title {font-size:5rem; font-weight:900; color:#ffffff; letter-spacing:0.3px; font-family:"NotoKr";}
          .sub_tit {margin-top:10.8%; font-size:1.5rem; font-weight:bold; color:#ffffff;  font-family:"NotoKr"; text-align:left;}
        }
      }
      
  `
}