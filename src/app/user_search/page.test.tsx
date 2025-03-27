import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import UserSearch from "./page";
import React from "react";

describe("UserSearch", () => {
  test("検索後に結果が表示されること", () => {
    render(<UserSearch />);

    const searchButton = screen.getByText("検索");
    fireEvent.click(searchButton);

    expect(screen.getByText("山田太郎")).toBeInTheDocument();

    const row = screen.getByText("山田太郎").closest("tr");
    if (row) {
      fireEvent.click(row);
    }
  });

  test("該当する検索結果がない場合、または空の検索ワードを入力した場合は、全データを表示する", () => {
    render(<UserSearch />);

    const input = screen.getByPlaceholderText("キーワード・電話番号で検索");
    fireEvent.change(input, { target: { value: "存在しない名前" } });
    fireEvent.change(input, { target: { value: "" } });

    const searchButton = screen.getByText("検索");
    fireEvent.click(searchButton);

    expect(screen.getByText("山田太郎")).toBeInTheDocument();
    expect(screen.getByText("小池春奈")).toBeInTheDocument();
    expect(screen.getByText("田中太郎")).toBeInTheDocument();
  });
});