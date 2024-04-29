import { InputHTMLAttributes } from "react"
import { FieldErrors } from "react-hook-form"

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: FieldErrors
  onEnter?: (value: string) => void
}