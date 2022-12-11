import styled from "styled-components";
import "../../../resources/font/Lato.css";

export const HeaderSection = {
  HeaderFrame:styled.nav`
    position:fixed; display:flex; flex-basis:100%; width:100%;
    > ul {flex-basis:50%;
      li {display:flex; justify-content:center; align-items:center; padding:1rem 0; cursor:pointer;
        span {padding:2rem 0; font-size:1.1rem; font-weight:600; letter-spacing: 0.12rem;}
      }
    }
    .left_menu {flex-basis:47%;
      li {background:#000000; position:relative;
        &.bars_btn {background:inherit; flex-basis:10%; 
          img {margin-top:1rem;}
        }
        span {color:#ffffff;}
        &:not(:first-child) {flex-basis:calc(90%/5);
          ::after {content:""; position:absolute; width:0.1rem; height:1.2rem; top:calc(50% - 0.6rem); right:0; background:#333333;}
          :hover {background:#fdd000;
            ::after {background:#fdd000;}
          }
        }
        &:last-child {
          ::after {display:none;}
        }
      }
    }
    .right_menu {flex-basis:53%;
      li {flex-basis:auto;
        &.logo {flex-basis:25%; margin-left:2.5rem; background:inherit;}
        &:last-child {flex-basis:10%; background:#f4f4f4;}
        span {font-weight:bold; color:#000000; letter-spacing: 0.09rem;}
      }
      > ul {flex-basis:75%; background:#fdd000; z-index: 1;
          li {flex-grow:1;
            span {font-size:1.1rem; font-weight:900; font-family:"Lato"; letter-spacing:1px;}
          }
          .search_mode {flex-basis:100%; width:100%; height:100%; opacity:0; visibility:hidden; z-index:-1; background:#000000;
            input[type="text"] {width:82%;}
            .search_btn {border:1px solid red; flex-basis:10%;}
            &.active {opacity:1; visibility:visible; z-index:2;}
          }
        }
      
    }
  `
}