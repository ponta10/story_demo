import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta: Meta = {
  title: "Example/TextField",
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Email: Story = {
  args: {
    label: "メールアドレス",
    placeholder: "aaa",
    value: "ttt",
    type: "email",
    onChange: (e) => console.log(e),
  },
};

export const Password: Story = {
  args: {
    label: "パスワード",
    placeholder: "bbb",
    value: "gggg",
    type: "password",
  },
};

export const Confirm: Story = {
  args: {
    label: "パスワード(確認)",
    placeholder: "bbb",
    value: "eee",
    type: "password",
  },
};

export const Name: Story = {
  args: {
    label: "名前",
    value: "ccc",
  },
};
