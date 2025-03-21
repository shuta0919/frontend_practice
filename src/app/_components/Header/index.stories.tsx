import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "1000px" }}>
      <Header />
    </div>
  ),
};
