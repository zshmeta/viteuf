import styled, { keyframes } from 'styled-components';


const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: white;
  background: #cca92c;
  border: none;
  cursor: pointer;
  animation: ${pulse} 2s infinite;
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${pulse} 1s infinite;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;