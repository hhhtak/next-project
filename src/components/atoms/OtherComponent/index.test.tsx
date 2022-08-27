import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import OtherComponent from '@components/atoms/OtherComponent'

describe('OtherComponent Component', () => {
  const text = 'Button Component'

  it('OtherComponentが正しく表示されていること', () => {
    render(<OtherComponent />)
    expect(screen.findByText('全然関係ない')).toBeTruthy()
  })
})
