"use client";
import styled from 'styled-components';
import { Header } from '../_components/Header';
import { Sidebar } from '../_components/Sidebar';
import { SearchForm } from '../_components/SearchForm';

const Container = styled.div`
  display: flex;
  background: white;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchSection = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
  white-space: nowrap;
`;

export default function UserSearch() {
  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <ContentArea>
          <SearchSection>
            <Title>顧客情報の検索</Title>
            <SearchForm onSearch={handleSearch} />
          </SearchSection>
        </ContentArea>
      </MainContent>
    </Container>
  );
}