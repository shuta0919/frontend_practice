"use client";
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 45px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #333;
`;

const Subtext = styled.div`
  font-size: 10px;
  color: #666;
`;

export function Header() {
  return (
    <HeaderContainer>
      <Title>メンテナンスノート</Title>
      <Subtext>UPGARAGE練馬店</Subtext>
    </HeaderContainer>
  );
}