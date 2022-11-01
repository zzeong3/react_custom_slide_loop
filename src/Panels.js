import styled from "styled-components";
import { forwardRef } from 'react';

const PanelWrap = styled.ul`
  width: 800px; height: 400px; border: 1px solid #000; position: relative; 
`;
const Slide = styled.li`
  width: 100%; height: 100%; position: absolute; top: 0; left: 0; 
  background: hotpink; display: flex; justify-content: center; align-items: center;
  font-size: 100px; color: #fff; transition: opacity 0.5s, transform 0.5s;
  &:nth-of-type(1) {
    transform: translateX(90%) scale(0.4); opacity: 0; z-index: 1;
  }
  &:nth-of-type(2) {
    transform: translateX(-70%) scale(0.7); opacity: 0.7; z-index: 2;
  }
  &:nth-of-type(3) {
    transform: translateX(0%) scale(1); opacity: 0.9; z-index: 3;
  }
  &:nth-of-type(4) {
    transform: translateX(70%) scale(0.7); opacity: 0.7; z-index: 2;
  }
  &:nth-of-type(5) {
    transform: translateX(-90%) scale(0.4); opacity: 0; z-index: 1;
  }
`

const Panels = forwardRef ((_, ref) => {
    return ( 
        <PanelWrap ref={ref}>
          {Array(5).fill().map((_, idx) => <Slide key={idx}>{idx + 1}</Slide>)}
        </PanelWrap>
      );
})

export default Panels;