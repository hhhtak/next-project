import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import DisplayCount from '@components/atoms/DisplayCount'

describe('DisplayCount Component', () => {
  it('DisplayCountが正しく表示されていること', () => {
    render(<DisplayCount />)
    expect(screen.findByText('カウント:')).toBeTruthy()
  })
})
