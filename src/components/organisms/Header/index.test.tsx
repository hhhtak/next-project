import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Header, { Props } from '@components/organisms/Header'

describe('Header Component', () => {
  const mockProps: Props = { onLogin: jest.fn(), onLogout: jest.fn(), onCreateAccount: jest.fn() }

  it('props.userにデータが設定されていない場合、ログアウトボタンが表示されていないこと', () => {
    const props: Props = { ...mockProps }
    render(<Header {...props} />)
    expect(screen.findByText('Log out')).toBeTruthy()
  })

  it('props.userにデータが設定されていた場合、ログアウトボタンが表示されていること', () => {
    const props: Props = { ...mockProps, user: { name: 'hoge' } }
    render(<Header {...props} />)
    expect(screen.findByText('Log out')).toBeTruthy()
  })
})
