"use client";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

const HelloText = styled.h1`
  font-size: 3rem;
  color: #1a1a1a;
  font-weight: bold;
  text-align: center;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <HelloText>Hello World</HelloText>
    </Container>
  );
}
