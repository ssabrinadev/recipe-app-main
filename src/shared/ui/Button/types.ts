import { ButtonHTMLAttributes, ReactNode } from 'react'

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'gray' | 'default';
  children: ReactNode;
}