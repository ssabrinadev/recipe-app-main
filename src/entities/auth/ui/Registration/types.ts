export type TRegistrationForm = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export type TRegistrationUIProps = {
  onSubmit: (value: TRegistrationForm) => void;
  loading: boolean;
}