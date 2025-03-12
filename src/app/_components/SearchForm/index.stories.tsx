import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from './index';

const meta = {
  title: 'Components/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
  args: {
    onSearch: (keyword) => console.log('Search:', keyword),
  },
};