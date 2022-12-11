import styled from "styled-components";

export const HeaderSection = {
  HeaderFrame:styled.div`
    display: flex;
    ul {
      li {}
      .left_menu {flex-basis:40%;
        > li {
          :not(:first-child) { background:#000000;}
          span {color:#ffffff;}
        }
      }
      .right_menu {
        > li{
          :not(:first-child,:last-child) {
            background:#fdd000;
          }
        }
      }
    }
  `
}