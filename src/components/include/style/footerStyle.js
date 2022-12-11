import styled from "styled-components";

export const FooterSection = {
  FooterFrame:styled.div`
    display: flex; flex-direction: column; border-top:1px solid #d6d6d6;
    .top_section {width:100%; padding:4rem 0;
      ul {padding-top:4.5rem;
        li {position:relative; padding:0 2.4rem; letter-spacing:-1px;
         &:not(:first-child)::after {content:""; position:absolute; width:4px; height:4px; top:calc(50% - 2px); left:0; background:#000000; border-radius:50%;}
        }
      }
    }
    .bottom_section {width:100%; padding-bottom:4.5rem; background:#000000;
      ul {padding:2.8rem 0;
        :first-child { border-bottom:1px solid #252525;}
        li {position:relative; padding:0 1rem;
          &:not(:last-child)::after {content:""; position:absolute; width:1px; height:80%; top:10%; right:0; background:#333333;}
        }
      }
      > * {font-size:1.4rem; color:#999999;
        li {font-size:1.4rem;}
      }
    }
  `
}