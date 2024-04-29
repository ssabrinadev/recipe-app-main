import { TAuthResponse, getUser, setUser as setSliceUser } from "@/entities";
import { useAppDispatch, useAppSelector } from "./useStore";
import { getAuth } from "..";

export const useAuth = () => {
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()
  
  const setUser = (user: TAuthResponse) => {
    dispatch(setSliceUser(user))
  }

  const logout = () => {
    dispatch(setSliceUser(undefined))
    localStorage.clear()
  }

  const { token, isAuth } = getAuth()
  return { user, token, isAuth, setUser, logout }
}
