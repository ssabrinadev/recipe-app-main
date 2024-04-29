import { FC } from "react"
import { Button, Input, logo, useValidationMessage } from "@/shared"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { TRegistrationForm, TRegistrationUIProps } from "."

export const RegistrationUI: FC<TRegistrationUIProps> = ({ onSubmit, loading }) => {
  const { required, minLength } = useValidationMessage()
  const { register, handleSubmit, formState: { errors } } = useForm<TRegistrationForm>()

  const submit: SubmitHandler<TRegistrationForm> = async (data) => {
    onSubmit(data)
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img src={logo} alt="logo" />
        </Link>
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-primary-100">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Регистрация аккаунта
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(submit)}>
              <Input
                placeholder="Вася"
                id="name"
                label="Имя"
                {...register('name', { required })}
                error={errors}
              />
              <Input
                placeholder="Пупкин"
                id="surname"
                label="Фамилия"
                {...register('surname', { required, minLength: minLength(3) })}
                error={errors}
              />
              <Input
                placeholder="name@company.com"
                type="email"
                id="email"
                label="Логин"
                {...register('email', { required })}
                error={errors}
              />
              <Input
                placeholder="••••••••"
                type="password"
                id="password"
                label="Пароль"
                {...register('password', { required, minLength: minLength(3) })}
                error={errors}
              />
              <Button disabled={loading} className="w-full">Зарегистрироваться</Button>
              <p className="text-sm font-light text-white">
                Уже есть аккаунт? {' '}
                <Link to="/auth/login" className="font-medium text-dark hover:underline dark:text-primary-500">Войти</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
