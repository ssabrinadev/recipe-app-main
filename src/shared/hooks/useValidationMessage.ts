export const useValidationMessage = () => {
  const required = 'Обязательное поле'
  const minLength = (value: number) => ({ value, message:  `Поле должно иметь не менее ${value} символов` })
  const maxLength = (value: number) => ({ value, message: `Поле должно иметь не более ${value} символов` })

  return { required, minLength, maxLength }
}