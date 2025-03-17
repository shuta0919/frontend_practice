"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnet } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faCamera,
  faPen,
  faCircle,
  faTh,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

// メインのサイドバーコンテナ
const SidebarContainer = styled.div`
  width: 60px;
  height: 100vh;
  background: white;
  border-right: 2px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
`;

const Logo = styled.div`
  width: 100%;
  height: 45px;
  background: #ffdd00;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-weight: bold;
  font-size: 25px;
`;

const ChevronButton = styled.button`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0088ff;
  border-bottom: 2px solid #eee;
  font-size: 20px;
  cursor: pointer;

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
    color: #0088ff;
  }
`;

const MenuText = styled.span`
  display: block;
  line-height: 1.2;
  font-size: 12px;
`;

// サブメニュー関連のスタイル
const SubMenuContainer = styled.div`
  position: absolute;
  top: 45px;
  width: 180px;
  height: calc(100vh - 45px);
  background: white;
  border-right: 2px solid #e5e5e5;
  z-index: 5;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #333;
  }
`;

const CategoryHeader = styled.div`
  padding: 12px 15px;
  font-weight: bold;
  color: #333;
  font-size: 14px;
`;

const SubMenuList = styled.div`
  width: 100%;
`;

const SubMenuItem = styled.a`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 13px;

  &:hover {
    background: #f5f5f5;
    color: #0066cc;
  }
`;

const SubMenuIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: white;
  background-color: #3498db;
  border-radius: 4px;
  font-size: 14px;
`;

const Spacer = styled.div`
  width: 100%;
  padding: 10px 0;
`;

export function Sidebar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>
      <SidebarContainer>
        <Logo>
          <FontAwesomeIcon icon={faMagnet} />
        </Logo>
        <ChevronButton aria-label="サブメニューを開く" onClick={toggleSubMenu}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ChevronButton>
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

      {/* サブメニュー */}
      {isSubMenuOpen && (
        <SubMenuContainer>
          <CloseButton aria-label="サブメニューを閉じる" onClick={toggleSubMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>

          <CategoryHeader>買取査定</CategoryHeader>
          <SubMenuList>
            <SubMenuItem href="#">
              <SubMenuIcon>
                <FontAwesomeIcon icon={faCamera} />
              </SubMenuIcon>
              新規買取査定
            </SubMenuItem>
            <SubMenuItem href="#">
              <SubMenuIcon>
                <FontAwesomeIcon icon={faPen} />
              </SubMenuIcon>
              買取契約の締結
            </SubMenuItem>
            <SubMenuItem href="#">
              <SubMenuIcon>
                <FontAwesomeIcon icon={faCircle} />
              </SubMenuIcon>
              仮入庫前一覧
            </SubMenuItem>
            <SubMenuItem href="#">
              <SubMenuIcon>
                <FontAwesomeIcon icon={faTh} />
              </SubMenuIcon>
              査定ランク編集
            </SubMenuItem>
          </SubMenuList>

          <Spacer />

          <CategoryHeader>入庫</CategoryHeader>
          <SubMenuList>
            <SubMenuItem href="#">
              <SubMenuIcon>
                <FontAwesomeIcon icon={faCircle} />
              </SubMenuIcon>
              入庫サブメニュー
            </SubMenuItem>
            <SubMenuItem href="#">
              <SubMenuIcon>
                <FontAwesomeIcon icon={faCircle} />
              </SubMenuIcon>
              入庫サブメニュー
            </SubMenuItem>
          </SubMenuList>

          <Spacer />

          <CategoryHeader>顧客情報</CategoryHeader>
          <SubMenuList>
            <SubMenuItem href="#">
              <SubMenuIcon>
                <FontAwesomeIcon icon={faIdCard} />
              </SubMenuIcon>
              新規顧客登録
            </SubMenuItem>
            <SubMenuItem href="#">
              <SubMenuIcon>
                <FontAwesomeIcon icon={faIdCard} />
              </SubMenuIcon>
              Croooober ID検索
            </SubMenuItem>
          </SubMenuList>
        </SubMenuContainer>
      )}
    </>
  );
}
