import { ReactNode } from 'react'
import { MutableSnapshot, RecoilRoot } from 'recoil'
import {
  userState,
  useStateUser,
  useSetUser,
  useResetUser,
  defaultValues,
  User,
} from '@hooks/recoil/user'
import { act, renderHook } from '@testing-library/react'

describe('hooks/recoil/userのテスト', () => {
  it('stateに正しい値が設定されること', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => <RecoilRoot>{children}</RecoilRoot>

    const { result } = renderHook(
      () => {
        const user = useStateUser()
        const setUser = useSetUser()
        const resetUser = useResetUser()
        return { user, setUser, resetUser }
      },
      { wrapper }
    )
    const changeUser: User = { name: 'hogehoge', height: 1000 }
    expect(result.current.user).toBe(defaultValues)
    act(() => result.current.setUser(changeUser))
    expect(result.current.user).toBe(changeUser)
    act(() => result.current.resetUser())
    expect(result.current.user).toBe(defaultValues)
  })
})
