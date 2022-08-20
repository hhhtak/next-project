import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Button, { ButtonProps } from '@components/atoms/Button'
import { ButtonSize } from '@components/atoms/Button/styled'

describe('Button Component', () => {
  const text = 'Button Component'
  const buttonSize: ButtonSize = 'small'
  const mockProps: ButtonProps = { size: buttonSize, children: text }

  it('childrenに渡した値が正しく表示されていること', () => {
    const { container } = render(<Button {...mockProps} />)
    screen.debug()
    expect(screen.getByText(text)).toBeTruthy()
    expect(container.getElementsByClassName(buttonSize)).toBeTruthy()
  })

  it('props.size未設定の場合、mediumが設定されること', () => {
    const mediumButtonSize: ButtonSize = 'medium'
    const props: ButtonProps = { children: text }
    const { container } = render(<Button {...props} />)
    expect(container.getElementsByClassName(mediumButtonSize)).toBeTruthy()
  })

  it('props.size:largeの場合、largeが設定されること', () => {
    const largeButtonSize: ButtonSize = 'large'
    const props: ButtonProps = { ...mockProps, size: largeButtonSize }
    const { container } = render(<Button {...props} />)
    expect(container.getElementsByClassName(largeButtonSize)).toBeTruthy()
  })

  it('props.primary:true場合、largeが設定されること', () => {
    const props: ButtonProps = { ...mockProps, primary: true }
    const { container } = render(<Button {...props} />)
    console.log(container.firstChild)
    expect(container.firstChild).toHaveStyleRule('color', 'white', {})
    expect(container.firstChild).toHaveStyleRule('background-color', '#1ea7fd', {})
    expect(container.firstChild).toHaveStyleRule('box-shadow', 'none', {})
  })
})
