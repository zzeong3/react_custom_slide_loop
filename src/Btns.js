import styled from "styled-components";
import { useState, useEffect } from "react";

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index:5;
  &.prev {left: 50px;}
  &.next {right: 50px;}
`

function Btns({ panel }) {
  const [Enabled, setEnabled] = useState(true);

  const convertSpeed = (el) => parseFloat(getComputedStyle(el).transitionDuration) * 1000;


  let delay = null;
  panel.current && (delay = convertSpeed(panel.current.children[0]));

  const moveNext = () => {
    if(!Enabled) return;
    setEnabled(false);
    panel.current.append(panel.current.firstElementChild);
    setTimeout(()=>setEnabled(true), delay);
  }


  const movePrev = () => {
    if(!Enabled) return;
    setEnabled(false);
    panel.current.prepend(panel.current.lastElementChild);
    setTimeout(()=>setEnabled(true), 500);
  }

  useEffect(()=>{
    movePrev();
    movePrev();
  },[])


  return (
    <>
      <Btn className='prev' onClick ={movePrev}>prev</Btn>
      <Btn className='next' onClick ={moveNext}>next</Btn>
    </>
  );
}

export default Btns;