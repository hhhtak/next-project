import styled from 'styled-components/macro'

interface Props {
  primary: boolean
  size: 'small' | 'medium' | 'large'
}

const setButtonSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return `font-size: 12px; padding: 10px 16px;`
    case 'medium':
    default:
      return `font-size: 14px; padding: 11px 20px;`
    case 'large':
      return `font-size: 16px; padding: 12px 24px;`
  }
}

export const styledButton = (props: Props) => styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${props.primary ? 'white' : '333'};
  background-color: ${props.primary ? '#1ea7fd' : 'transparent'};
  box-shadow: ${props.primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
  ${setButtonSizeStyles(props.size)};
`