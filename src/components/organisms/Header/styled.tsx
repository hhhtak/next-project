import styled from 'styled-components'
import Button from '@components/atoms/Button'

export const StyledWrapper = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledSvg = styled.svg`
  display: inline-block;
  vertical-align: top;
`
export const StyledH1 = styled.h1`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
`
export const StyledCustomButton = styled(Button)`
  margin-left: 10px;
`
