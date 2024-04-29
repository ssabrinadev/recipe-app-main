export type TLoginForm = {
  email: string;
  password: string;
}

export type TLoginUIProps = {
  onSubmit: (value: TLoginForm) => void;
  loading: boolean;
}