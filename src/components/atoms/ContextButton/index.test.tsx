import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import ContextButton from '@components/atoms/ContextButton'

describe('ContextButton Component', () => {
  it('ContextButtonが表示される', async () => {
    render(<ContextButton />)
    const button = screen.getByRole('button')

    expect(screen.getByText('+1')).toBeInTheDocument()
  })
  // it('ボタン押下でテキストがインクリメントされること', async () => {
  //   const { container } = render(<ContextButton />, { wrapper: ProductProvider })
  //   const button = screen.getByRole('button')
  //   expect(screen.getByText('+1')).toBeInTheDocument()
  //   // todo: インクリメントされない
  //   userEvent.click(button)
  //   expect(screen.getByText('+1')).toBeInTheDocument()
  // })
})
