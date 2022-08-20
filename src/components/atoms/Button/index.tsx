import React from 'react'
import { StyledButton, ButtonSize } from '@components/atoms/Button/styled'

export type Props = {
  primary?: boolean
  backgroundColor?: string
  size?: ButtonSize
  children: React.ReactNode
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<Props> = (props: Props) => {
  const { primary = false, size = 'medium', backgroundColor, children, ...otherProps } = props

  return (
    <StyledButton type='button' style={{ backgroundColor }} {...{ primary, size, ...otherProps }}>
      {children}
    </StyledButton>
  )
}

export default Button
