import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './index';
import React from 'react';

describe('Header', () => {
  test('タイトルとサブテキストが表示されていること', () => {
    render(<Header />);
    expect(screen.getByText('メンテナンスノート')).toBeInTheDocument();
    expect(screen.getByText('UPGARAGE練馬店')).toBeInTheDocument();
  });
});