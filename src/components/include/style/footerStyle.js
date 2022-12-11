import styled from "styled-components";

export const FooterSection = {
  FooterFrame:styled.div`
    display: flex; flex-direction: column; border-top:1px solid #d6d6d6;
    .top_section {width:100%; padding:4.5rem 0;}
    .bottom_section {width:100%; padding-bottom:4.5rem; background:#000000;
      > * {color:#999999;}
    }
  `
}