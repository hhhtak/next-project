import { render, screen } from '@testing-library/react'
import Page, { Props } from '@components/Page'

describe('Page Component', () => {
  const mockProps: Props = { onLogin: jest.fn(), onLogout: jest.fn(), onCreateAccount: jest.fn() }

  it('Pageコンポーネントが表示されること', () => {
    const h2Text = 'Pages in Storybook'
    render(<Page {...mockProps} />)
    expect(screen.findByText(h2Text)).toBeTruthy()
  })
})
