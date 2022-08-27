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

type Props = {
  children: React.ReactNode
}

// コンテキストは値と設定する関数を分けて作る
const countContext = createContext<number>(0)
const setCountContext = createContext<Dispatch<SetStateAction<number>>>(() => undefined)

// Providerはpropsを使用して子コンポーネントで受け取る
const CountProvider: FC<Props> = (props: Props) => {
  const { children } = props
  const [count, setCount] = useState<number>(0)

  return (
    <countContext.Provider value={count}>
      <setCountContext.Provider value={setCount}>{children}</setCountContext.Provider>
    </countContext.Provider>
  )
}

const useCountValue = () => useContext(countContext)
const useCountSetValue = () => useContext(setCountContext)

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
