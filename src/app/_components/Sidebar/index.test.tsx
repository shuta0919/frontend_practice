import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Sidebar } from './index';
import React from 'react';
import 'jest-styled-components';

describe('Sidebar', () => {
  test('すべてのメニューが表示されてること', () => {
    render(<Sidebar />);
    
    expect(screen.getByText('買取')).toBeInTheDocument();
    expect(screen.getByText('査定')).toBeInTheDocument();
    expect(screen.getByText('入庫')).toBeInTheDocument();
    expect(screen.getByText('顧客')).toBeInTheDocument();
    expect(screen.getByText('情報')).toBeInTheDocument();
  });


  test('アイコンが2つ存在すること', () => {
    render(<Sidebar />);
    
   const icons = document.querySelectorAll('svg');
   expect(icons.length).toBe(2);
  });

  test('各メニューアイテムがホバー時に正しくスタイルが変更されること', () => {
    render(<Sidebar />);
    
    // 全てのMenuItemを取得
    const menuItems = document.querySelectorAll('a');
    
    // メニューアイテムが3つあることを確認
    expect(menuItems.length).toBe(3);

    menuItems.forEach(menuItem => {
      // 通常状態のスタイルを確認
      expect(menuItem).toHaveStyleRule('color', 'black');
      
      // ホバー時のスタイルを確認
      expect(menuItem).toHaveStyleRule('background', '#f5f5f5', { 
        modifier: ':hover' 
      });
      expect(menuItem).toHaveStyleRule('color', '#0088FF', { 
        modifier: ':hover' 
      });
    });
  });
});