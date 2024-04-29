import { USER_LOCALSTORAGE_KEY } from "..";

export const getAuth = () => {
  const { token } = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) || '{}');
  return { token, isAuth: !!token }
}