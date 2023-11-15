import styled from 'styled-components';

export const ModalWrapper = styled.div`
  /* Display */
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Box Model */
  padding: 10px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  /* Typography */
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  /* Background */
  background: linear-gradient(90deg, #000, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  /* Animation */
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  /* Shadow */
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  /* Z-index */
  z-index: 9999;
  /* Media Queries */
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;
