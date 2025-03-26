"use client";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: white;
  border-radius: 4px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 0 12px;
  min-width: 300px;
`;

const SearchIconWrapper = styled.span`
  color: #888;
  margin-right: 8px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Input = styled.input`
  min-width: 0;
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 0;
  font-size: 14px;
  color: #333;
  &::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  padding: 7px 22px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    background: #0052a3;
  }
`;

interface SearchFormProps {
  onSearch?: (keyword: string) => void;
}

export function SearchForm({ onSearch = () => { } }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch() {
    console.log('検索ワード:', searchTerm);
    onSearch(searchTerm);
  }

  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchIconWrapper>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIconWrapper>
        <Input type="text" placeholder="キーワード・電話番号で検索" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </SearchInputContainer>
      <SearchButton onClick={handleSearch}>検索</SearchButton>
    </SearchContainer>
  );
}
