import { FC } from "react"
import { Button, Input, logo, useValidationMessage } from "@/shared"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { TLoginForm, TLoginUIProps } from "."

export const LoginUI: FC<TLoginUIProps> = ({ onSubmit, loading }) => {
  const { required, minLength } = useValidationMessage()
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginForm>()

  const submit: SubmitHandler<TLoginForm> = async (data) => {
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
              Войти в аккаунт
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(submit)}>
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
              <Button disabled={loading}>Войти</Button>
              <p className="text-sm font-light text-white">
                Все еще нет аккаунта? {' '}
                <Link to="/auth/register" className="font-medium text-dark hover:underline dark:text-primary-500">Зарегистрируетесь</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
