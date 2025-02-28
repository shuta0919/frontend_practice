import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Sidebar } from './index';
import React from 'react';

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
});