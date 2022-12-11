import styled from "styled-components";

export const ExhibitionSection = {
  ListFrame:styled.div`
    display: flex; padding:6rem 0; border-top:1px solid #000000;
    .sc_tit {flex-basis:11%; font-size:3.8rem; font-weight:500;}
    .exhibition_list {
      li {z-index:2;
        > * {z-index:1;}
        ::after {content:""; position:absolute; width:90%; height:100%; top:0; left:0;  background:#f1f1f1; z-index:0;}
      }
    }
  `
}