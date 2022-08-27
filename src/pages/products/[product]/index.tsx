import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { NextPage } from 'next'
import ContextButton from '@components/atoms/ContextButton'
import DisplayCount from '@components/atoms/DisplayCount'
import OtherComponent from '@components/atoms/OtherComponent'

type Props = {
  children: React.ReactNode
}

// コンテキストは値と設定する関数を分けて作る
const countContext = createContext<number>(0)
const setCountContext = createContext<Dispatch<SetStateAction<number>>>(() => undefined)
export const useCountValue = () => useContext(countContext)
export const useCountSetValue = () => useContext(setCountContext)

// Providerはpropsを使用して子コンポーネントで受け取る
const ProductProvider: FC<Props> = (props: Props) => {
  const { children } = props
  const [count, setCount] = useState<number>(0)

  return (
    <countContext.Provider value={count}>
      <setCountContext.Provider value={setCount}>{children}</setCountContext.Provider>
    </countContext.Provider>
  )
}

const Product: NextPage = () => {
  return (
    <ProductProvider>
      <div className='product'>
        <DisplayCount />
        <ContextButton />
        <OtherComponent />
      </div>
    </ProductProvider>
  )
}

export default Product
