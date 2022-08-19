import styled from 'styled-components'

export type ButtonSize = 'small' | 'medium' | 'large'
type Props = {
  primary: boolean
  size: ButtonSize
}

const setButtonSizeStyles = (size: ButtonSize) => {
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

export const StyledButton = styled.button<Props>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${(props) => (props.primary ? 'white' : '333')};
  background-color: ${(props) => (props.primary ? '#1ea7fd' : 'transparent')};
  box-shadow: ${(props) => (props.primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset')};
  ${(props) => setButtonSizeStyles(props.size)}
`
