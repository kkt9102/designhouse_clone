import styled from "styled-components";

export const SlideSection = {
  SlideFrame: styled.div`
    position: relative;
    width: ${(props) => props.width};
    z-index: -1;
  `,
};
