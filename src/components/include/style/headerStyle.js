import styled from "styled-components";
import "../../../resources/font/Lato.css";

export const HeaderSection = {
  HeaderFrame:styled.div`
    display: flex;
    ul {
      li {padding:1.5rem 0;
        span {font-weight:600; font-family:"Lato";}
      }
      &.left_menu {flex-basis:40%;
        > li {display:flex; justify-content: center; align-items: center;
          :not(:first-child) { background:#000000;}
          span {font-size:1.2rem; color:#ffffff;}
        }
      }
      &.right_menu {
        > li {display:flex; justify-content: center; align-items: center;
          :not(:first-child,:last-child) {
            background:#fdd000;
          }
          span {font-size:1.2rem;}
        }
      }
    }
  `
}