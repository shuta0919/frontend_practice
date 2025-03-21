import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchForm } from "./index";
import React from "react";

describe("SearchForm", () => {
  test("プレースホルダー付きの入力フィールドが表示されていること", () => {
    render(<SearchForm />);
    expect(
      screen.getByPlaceholderText("キーワード・電話番号で検索"),
    ).toBeInTheDocument();
  });

  test("検索ボタンが表示されていること", () => {
    render(<SearchForm />);
    expect(screen.getByText("検索")).toBeInTheDocument();
  });

  test("検索ボタンがクリックされたとき、onSearchが呼び出されること", () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} />);

    const searchButton = screen.getByText("検索");
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalled();
  });
});
