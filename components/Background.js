import styled, { keyframes } from 'styled-components';

// Animation for the gradient background
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled component for the background
const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eae4);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  z-index: -1;
`;

const Background = () => {
  return <AnimatedBackground />;
};

export default Background;
