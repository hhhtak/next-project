import { render, screen, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import ContextButton from '@components/atoms/ContextButton'

describe('ContextButton Component', () => {
  it('ボタン押下でテキストがインクリメントされること', async () => {
    render(<ContextButton />)
    expect(screen.findByText('+1')).toBeTruthy()
    const button = screen.getByRole('button')
    fireEvent.click(button, 'increment')
    expect(screen.findByText('+2')).toBeTruthy()
  })
})
