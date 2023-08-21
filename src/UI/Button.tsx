import { FC } from 'react';

type ButtonProps = {
  onClick: () => void;
  label: string;
};

export const Button: FC<ButtonProps> = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);
