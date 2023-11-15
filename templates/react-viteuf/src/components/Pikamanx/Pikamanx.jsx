
  import React, { useEffect, useState } from 'react';
  import styled from 'styled-components';
  import styles from './Pikamanx.module.scss';
  import PikaMan from '../../assets/images/pikamanx.gif';

  const StyledSpan = styled.span`
    //make the text gradient colorful
    background: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    background-clip: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-text-fill-color: transparent;

    font-size: 1.3rem;
  `;

  const Pikamanx = () => {
 
    const [count, setCount] = useState(0);

    return (
      <div className={styles.Pikamanx}>
       <div>x
        <img src={PikaMan} alt="PikaMan" className={styles.PikaMan} />
        
        </div>
        <>
        <StyledSpan>I am a <br />component</StyledSpan>
        </>
      

      </div>
    );
  };

  export default Pikamanx;