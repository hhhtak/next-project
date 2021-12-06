import React from 'react'
import { StyledButton, ButtonSize } from '@components/atoms/Button/styled'

export type ButtonProps = {
  primary?: boolean
  backgroundColor?: string
  size?: ButtonSize
  children: React.ReactNode
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { primary = false, size = 'medium', backgroundColor, children, ...otherProps } = props

  return (
    <StyledButton type='button' style={{ backgroundColor }} {...{ primary, size, ...otherProps }}>
      {children}
    </StyledButton>
  )
}
