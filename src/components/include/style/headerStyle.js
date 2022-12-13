import styled from "styled-components";

export const HeaderSection = {
  HeaderFrame:styled.div`
    display: flex;
    ul {
      li {padding:1.3rem 0;
        span {font-weight:600;  font-display: swap;}
      }
      &.left_menu {flex-basis:47.5%;
        > li {position:relative; display:flex; justify-content: center; align-items: center; flex-grow:1;
          &.bars_btn {padding:0 3.3rem;}
          :not(.bars_btn) {flex-basis:calc(95.5%/5); background:#000000;
          }
          :not(.bars_btn, :nth-child(2))::after {content:""; position:absolute; width:1px; height:1.1rem; top:calc(50% - 0.6rem); left:0; background:#2e2e2e;}
            &::after {content:""; position:absolute; width:1px; height:1.1rem; top:50%; left:0;}
          span {font-size:1.1rem; font-weight:700; color:#ffffff; letter-spacing:0.9px;}
          :hover:not(.bars_btn) {background:#fdd000;}
          :hover:not(.bars_btn, :nth-child(2))::after {background:#fdd000;}
          &.drop_menu {
            ul {display:none; width:100%; height:100%; top:100%;
              li {
                span {color:#000000;}
                &:hover {background:#fdd000;}
              }
            }
            &:hover {
              ul {display:flex; flex-direction:column; justify-content:center;
                li {display:inherit; justify-content:inherit;}
              }
            }
          }
        }
      }
      &.right_menu {flex-basis:52.5%;
        > li {display:flex; justify-content: center; align-items: center;
          :not(:first-child,:last-child) {position:relative; flex-grow:1; background:#fdd000;}
          :nth-child(n + 3):nth-child(-n + 6)::after {content:""; position:absolute; width:1px; height:1.2rem; background:#b99f29; top:calc(50% -0.5rem); left:0;}
          span {font-size:1.1rem; font-weight:700; font-family:"NotoKr"; letter-spacing:1px;}
          &:first-child {flex-basis:27.5%;
            .img_box {padding-left:2.5rem;}
          }
          &:last-child {flex-basis:14.5%; background:#f4f4f4;
            ul {flex-basis:100%;
              li {position:relative; display:flex; flex-grow:1;
                &:first-child::after {content:""; position:absolute; width:1px; height:1.1rem; top:45%; right:0; background:#000000;}
                img {transform:translateY(0.5rem);}
              }
            }
          }
        }
      }
    }
  `
}