//a styled component that renders particles randomly placed of 2px with a shining effect

import React from "react";
import styled, { keyframes, css } from 'styled-components';

const styledParticles = css`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: #fff;
  border-radius: 50%;
  animation: ${keyframes`
    0% {  
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  `} 1.5s linear infinite;
`;

const Particle = styled.div`
  ${styledParticles}
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

// render a particle and multiply by 100



const Particles = () => {
  const particlesCount = Math.floor(Math.random() * (200 - 100 + 1) + 100);
  const particles = [];

  for (let i = 0; i < particlesCount; i++) {
    particles.push(
      <Particle
        key={i}
        top={Math.random() * 100}
        left={Math.random() * 100}
      />
    );
  }

  return particles;
}

export default Particles;
