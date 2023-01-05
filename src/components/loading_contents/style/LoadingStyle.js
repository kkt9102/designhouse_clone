import styled from "styled-components";

export const LoadingSection = {
  FirstFrame: styled.div`
  margin-top:7%;
   ul {
      li {flex-basis:calc(94%/2); width:calc(94%/2); cursor:pointer;
        .img_box {
          img {}
        }
        .type {margin-top:1rem; font-size:1.2rem; color:#a1a0a0;}
        .tit {margin-top:0.5rem; font-size:2rem; font-weight:600; color:#222222; letter-spacing:-0.9px;}
        .contents {margin-top:2rem; font-size:1.3rem; color:#666666; font-family:"NotoKr"; white-space:pre; word-break:keep-all;}
      }
    }
  `,
  LoadingFrame: styled.div`
    ul {
      li {flex-basis:calc(85%/4);
        .img_box {
          img {}
        }
        .type {}
        .tit {}
        .contents {}
      }
    }
  `,
};
