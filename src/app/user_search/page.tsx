"use client";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

const SearchSection = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const SearchBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0052a3;
  }
`;

export default function UserSearch() {
  return (
    <Container>
      <SearchSection>
        <Title>顧客情報の検索</Title>
        <SearchBox>
          <Input 
            type="text" 
            placeholder="キーワード・電話番号で検索" 
          />
          <SearchButton>検索</SearchButton>
        </SearchBox>
      </SearchSection>
    </Container>
  );
}