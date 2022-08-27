import { render, screen, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import ContextButton from '@components/atoms/ContextButton'

describe('ContextButton Component', () => {
  it('ボタン押下でテキストがインクリメントされること', () => {
    render(<ContextButton />)
    expect(screen.findByText('+1')).toBeTruthy()

    screen.debug()
    const button = screen.getByRole('button')
    fireEvent.click(button, {})
    expect(screen.findByText('+2')).toBeTruthy()
  })
})
