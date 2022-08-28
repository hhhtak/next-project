import { FC, useCallback } from 'react'
import { useCountSetValue } from '@providers/count'
import { StyledWrapper } from '@components/atoms/ContextButton/styled'

const ContextButton: FC = () => {
  console.log('render button')

  const setCount = useCountSetValue()

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [setCount])

  return (
    <StyledWrapper>
      <button onClick={increment}>+1</button>
    </StyledWrapper>
  )
}

export default ContextButton
