import React from 'react'
import styled from 'styled-components/macro'

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
export const Button: React.FC<ButtonProps> = (props) => {
  const { primary = false, size = 'medium', backgroundColor, children, ...otherProps } = props

  const getButtonSize = (size: string) => {
    switch (size) {
      case 'small':
        return `font-size: 12px; padding: 10px 16px;`
      case 'medium':
        return `font-size: 14px; padding: 11px 20px;`
      case 'large':
        return `font-size: 16px; padding: 12px 24px;`
      default:
        return ``
    }
  }

  const Button = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    color: ${primary ? 'white' : '#333'};
    background-color: ${primary ? '#1ea7fd' : 'transparent'};
    box-shadow: ${primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
    ${getButtonSize(size)}
  `

  return (
    <Button type='button' style={{ backgroundColor }} {...otherProps}>
      {children}
    </Button>
  )
}
