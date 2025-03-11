"use client";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnet } from '@fortawesome/free-solid-svg-icons'; 
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  width: 60px;  
  height: 100vh;
  background: white;  
  border: 2px solid #e5e5e5;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 100%;
  height: 45px;
  background: #FFDD00;  
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;  
  font-weight: bold;
  font-size: 25px;
`;

const MenubarIcon = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0088FF;
  border-bottom: 2px solid #eee;
  font-size: 20px;

  &:hover {
    background: #f5f5f5;
  }
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MenuItem = styled.a`
  width: 100%;
  height: 50px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  text-decoration: none;
  font-size: 12px;
  text-align: center;
  border-bottom: 2px solid #eee;

  &:hover {
    background: #f5f5f5;
    color: #0088FF;
  }
`;

const MenuText = styled.span`
  display: block;
  line-height: 1.2;
  font-size: 12px;
`;




export function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>
        <FontAwesomeIcon icon={faMagnet} />
      </Logo>
      <MenubarIcon>
        <FontAwesomeIcon icon={faChevronRight} />
      </MenubarIcon>
      <MenuList>
        <MenuItem>
          <MenuText>買取</MenuText>
          <MenuText>査定</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuText>入庫</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuText>顧客</MenuText>
          <MenuText>情報</MenuText>
        </MenuItem>
      </MenuList>
    </SidebarContainer>
  );
}