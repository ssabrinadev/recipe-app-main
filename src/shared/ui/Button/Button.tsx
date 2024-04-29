import { FC } from "react"
import { cn, cva } from "@/shared"

import type { TButtonProps } from "."

const buttonVariant = cva(
  'px-6 py-3 rounded-full text-dark uppercase active:scale-95 transition',
  {
    variants: {
      variant: {
        default: 'bg-dark text-[#F0EBE1]',
        outline: 'bg-transparent border-2 border-dark',
        gray: 'bg-[#e0dbd2]',
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  }
)

export const Button: FC<TButtonProps> = ({ className, variant = 'default', children, ...props }) => (
  <button className={cn('disabled:opacity-50 disabled:cursor-default', buttonVariant({ variant, className }))} {...props}>
    {children}
  </button>
)
