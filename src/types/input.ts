import type { ChangeEvent, FocusEvent } from 'react';

export interface InputProps {
  type: string;
  name?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}
