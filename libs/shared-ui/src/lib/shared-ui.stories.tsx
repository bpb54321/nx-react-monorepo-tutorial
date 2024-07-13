import type { Meta, StoryObj } from '@storybook/react';
import { SharedButton } from './shared-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SharedButton> = {
  component: SharedButton,
  title: 'SharedButton',
};
export default meta;
type Story = StoryObj<typeof SharedButton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SharedButton!/gi)).toBeTruthy();
  },
};
