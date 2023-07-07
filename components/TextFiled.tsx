// src/components/TextField.tsx
import React, { FC, ChangeEvent } from 'react';

export interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

export default TextField;

