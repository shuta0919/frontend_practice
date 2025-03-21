import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./index";
import React from "react";
import "jest-styled-components";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <div data-testid="mock-icon" />
}));

describe("Sidebar", () => {
  test("すべてのメニューが表示されてること", () => {
    render(<Sidebar />);

    expect(screen.getByText("買取")).toBeInTheDocument();
    expect(screen.getByText("査定")).toBeInTheDocument();
    expect(screen.getByText("入庫")).toBeInTheDocument();
    expect(screen.getByText("顧客")).toBeInTheDocument();
    expect(screen.getByText("情報")).toBeInTheDocument();
  });

  test("アイコンが存在すること", () => {
    render(<Sidebar />);

    const icons = screen.getAllByTestId("mock-icon");
    expect(icons.length).toBeGreaterThan(0);
  });

  test("各メニューアイテムがホバー時に正しくスタイルが変更されること", () => {
    render(<Sidebar />);

    const menuItems = screen.getAllByTestId("menu-item");

    expect(menuItems.length).toBeGreaterThan(0);

    menuItems.forEach((menuItem) => {
      expect(menuItem).toHaveStyleRule("background", "#f5f5f5", {
        modifier: ":hover",
      });
    });
  });

  test("初期状態でサブメニューは表示されないこと", () => {
    render(<Sidebar />);

    const subMenuContainer = screen.queryByText("買取査定");
    expect(subMenuContainer).not.toBeInTheDocument();
  });

  test(">アイコンをクリックするとサブメニューが表示されること", () => {
    render(<Sidebar />);

    const menuButton = screen.getByRole("button", { name: "サブメニューを開く" });
    fireEvent.click(menuButton);

    expect(screen.getByText("買取査定")).toBeInTheDocument();
  });

  test("閉じるボタンをクリックするとサブメニューが非表示されること", () => {
    render(<Sidebar />);

    const menuButton = screen.getByRole("button", { name: "サブメニューを開く" });
    fireEvent.click(menuButton);

    expect(screen.getByText("買取査定")).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: "サブメニューを閉じる" });
    fireEvent.click(closeButton);

    expect(screen.queryByText("買取査定")).not.toBeInTheDocument();
  });

  test("ホバー時のサブメニュー表示用の要素が存在すること", () => {
    render(<Sidebar />);
    
    const menuItem = screen.getAllByTestId("menu-item")[0];
    expect(menuItem).toBeInTheDocument();
    
    const submenuContainer = screen.queryByTestId('action-item-container');
    expect(submenuContainer).toBeInTheDocument();
  });
});
