import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './index';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '700px' }}>
      <Sidebar />
    </div>
  ),
};

