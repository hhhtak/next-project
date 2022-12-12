import {
  atom,
  useRecoilValue,
  useRecoilState,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil'

export type User = {
  name: string
  height: number | null
}

export const defaultValues: User = {
  name: '',
  height: null,
}

export const userState = atom<User>({
  key: 'recoil/UserState',
  default: defaultValues,
})

export const useStateUser = () => {
  return useRecoilValue(userState)
}

export const useSetUser = () => {
  const setUserValues = useSetRecoilState<User>(userState)
  return setUserValues
}

export const useResetUser = () => {
  const resetUser = useResetRecoilState(userState)
  return resetUser
}
