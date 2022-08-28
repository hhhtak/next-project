import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { NextPage } from 'next'
import ContextButton from '@components/atoms/ContextButton'
import DisplayCount from '@components/atoms/DisplayCount'
import OtherComponent from '@components/atoms/OtherComponent'
import { countContext } from '@providers/count'
import { setCountContext } from '@providers/setCount'

type Props = {
  children: React.ReactNode
}

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
