/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { KeyboardEventHandler, forwardRef } from 'react'
import { cn } from '@/shared'
import type { TInputProps } from '.'


export const Input = forwardRef<HTMLInputElement, TInputProps>(({ id, label, error, className, onKeyDown, onEnter, ...props }, ref) => {
  const handlePressEnter = (event: KeyboardEventHandler<HTMLInputElement>) => {
    onKeyDown && onKeyDown(event)
    if (event.key === 'Enter' && onEnter) {
      onEnter(props.value)
    }
  }
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">{label}</label>}
      <input
        ref={ref}
        id={id}
        className={cn('bg-light border transition border-light-100 text-dark sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 ', className)}
        onKeyDown={handlePressEnter}
        {...props}
      />
      {error && <span className="text-primary">{error?.[props?.name || 'root']?.message}</span>}
    </div>
  )
})
