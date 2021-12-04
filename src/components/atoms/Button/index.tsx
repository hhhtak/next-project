import React from 'react'
import { styledButton } from '@components/atoms/Button/styled'

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { primary = false, size = 'medium', backgroundColor, children, ...otherProps } = props

  const Button = styledButton({ primary, size })

  return (
    <Button type='button' style={{ backgroundColor }} {...otherProps}>
      {children}
    </Button>
  )
}
