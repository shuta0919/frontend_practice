"use client";
import styled from "styled-components";
import { useState } from "react";
import { Header } from "../_components/Header";
import { Sidebar } from "../_components/Sidebar";
import { SearchForm } from "../_components/SearchForm";

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
  width: 1200px;
  flex: 1;
  display: flex;
  flex-direction: column;
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

const ResultsTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 7px;
  text-align: left;
  font-weight: bold;
  color: #333;
  background: #eeffff;
`;

const TableCell = styled.td`
  padding: 7px;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
`;

interface TableRowProps {
  $isSelected: boolean;
}

const TableRow = styled.tr<TableRowProps>`
  background: ${props => props.$isSelected ? '#e0e0e0' : 'white'};

  &:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 55px;
  border: 1px solid #0088ff;
  background: #0066cc;
  color: white;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  &:hover {
    background: #0052a3;
  }
`;

const BackButton = styled.button`
  padding: 8px 55px;
  margin-right: 30px;
  border: 1px solid #0088ff;
  background: white;
  color: #0066cc;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  &:hover {
    background: #f5f5f5;
  }
`;

const MOCK_CUSTOMERS = [
  { 
    id: '12345678901234', 
    name: '山田太郎', 
    phone: '09042241234', 
    address: '東京都練馬区高野台1-1-1 201号室' 
  },
  { 
    id: '32323343022332', 
    name: '田中太郎', 
    phone: '09042241235', 
    address: '東京都練馬区高野台1-1-1 202号室' 
  },
  { 
    id: '98382329238838', 
    name: '小池春奈', 
    phone: '09042241236', 
    address: '東京都練馬区高野台1-1-1 203号室' 
  },
  { 
    id: '98382329232345', 
    name: '田中春奈', 
    phone: '09042241237', 
    address: '東京都練馬区高野台1-1-1 204号室' 
  },
  { 
    id: '98382329232334', 
    name: '太田春奈', 
    phone: '09042241238', 
    address: '東京都練馬区高野台1-1-1 205号室' 
  }
];

type Customer = {
  id: string;
  name: string;
  phone: string;
  address: string;
};

export default function UserSearch() {
  const [searchResults, setSearchResults] = useState<Customer[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleSearch = (searchTerm: string) => {
    setHasSearched(true);
    console.log("検索ワード:", searchTerm);

    const results = MOCK_CUSTOMERS.filter((customer) => 
      customer.id.includes(searchTerm) ||
      customer.name.includes(searchTerm) ||
      customer.phone.includes(searchTerm) ||
      customer.address.includes(searchTerm)
    );

    console.log("検索結果:", results);
    console.log("検索結果の数:", results.length);
    
    setSearchResults(results.length === 0 ? MOCK_CUSTOMERS : results);
  };

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
    console.log("選択された顧客:", customer);
  }

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

          {hasSearched && (
            <>
            <ResultsTable>
            <thead>
              <tr>
                <TableHeader>Croooober ID</TableHeader>
                <TableHeader>氏名</TableHeader>
                <TableHeader>電話番号</TableHeader>
                <TableHeader>住所</TableHeader>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((customer) => (
                <TableRow key={customer.id} $isSelected={selectedCustomer?.id === customer.id} onClick={() => handleCustomerSelect(customer)}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </ResultsTable>
          <ButtonContainer>
            <BackButton>戻る</BackButton>
            <Button>決定</Button>
          </ButtonContainer>
          </>
          )}
        </ContentArea>
      </MainContent>
    </Container>
  );
}
