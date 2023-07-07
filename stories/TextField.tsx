import { Typography } from '@mui/material';
import React from 'react';

interface TextFieldProps {
  /**
   * Input field label
   */
  label: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Value of the input field
   */
  value: string;
  /**
   * Function to handle changes in the input field
   */
  onChange: (value: string) => void;
  type: string;
}

/**
 * Primary UI component for user input
 */
export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <div className="storybook-textfield">
      <label className="storybook-textfield__label">{label}</label>
      <input
        className="storybook-textfield__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
      />
      <Typography>こんにちは</Typography>
    </div>
  );
};
