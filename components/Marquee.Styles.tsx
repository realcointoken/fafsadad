import styled, { keyframes } from 'styled-components';

export const MarqueeContainer = styled.div`
  background: linear-gradient(180deg, #040d21 0%, #040d21 100%);
  overflow-x: hidden;
  width: 100%;
  margin: 2em 0 0 0;
  position: relative;
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const MarqueeInner = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  text-align: center;
  padding: 2rem;
  z-index: 1;
  white-space: nowrap;
  align-items: center;
  min-width: 200%;
  height: 5rem;
  overflow: hidden;
  position: relative;
  animation: ${scroll} 10s linear infinite;
  @media (max-width: 768px) {
    height: max-content;
    gap: 1rem;
  }
`;

export const MarqueeItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MarqueeTitle = styled.div`
  color: #88d7cf;
  font-size: 1.5rem;
`;

export const MarqueeText = styled.div`
  color: #9e9e9e;
  font-size: 1rem;
`;
