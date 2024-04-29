import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
export { cva } from 'class-variance-authority'