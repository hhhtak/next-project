import { FC } from 'react'
import { useCountValue } from '@pages/products/[product]'

const DisplayCount: FC = () => {
  console.log('render カウント')
  const count = useCountValue()
  return <p>カウント: {count}</p>
}

export default DisplayCount
