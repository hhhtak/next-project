import { FC } from 'react'

const OtherComponent: FC = () => {
  console.log('render 全然関係ないコンポーネント')
  return <p>全然関係ない</p>
}

export default OtherComponent
