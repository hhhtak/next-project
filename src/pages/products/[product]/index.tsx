import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

type CountState = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

type Props = {
  children: React.ReactNode
}

const countContext = createContext<CountState>({
  count: 0,
  setCount: () => undefined,
})

const CountProvider: FC<Props> = (props: Props) => {
  const { children } = props
  const [count, setCount] = useState<number>(0)

  return <countContext.Provider value={{ count, setCount }}>{children}</countContext.Provider>
}

const useCountValue = () => useContext(countContext).count
const useCountSetValue = () => useContext(countContext).setCount

const Button = () => {
  console.log('render button')

  const setCount = useCountSetValue()
  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [setCount])

  return (
    <div>
      <button onClick={increment}>+1</button>
    </div>
  )
}

const DisplayCount = () => {
  console.log('render カウント')

  const count = useCountValue()

  return <p>カウント: {count}</p>
}

const OtherComponent = () => {
  console.log('render 全然関係ないコンポーネント')

  return <p>全然関係ない</p>
}

const App = () => {
  return (
    <div className='App'>
      <DisplayCount />
      <Button />
      <OtherComponent />
    </div>
  )
}

const Product: NextPage = () => {
  return (
    <CountProvider>
      <App />
    </CountProvider>
  )
}

export default Product
