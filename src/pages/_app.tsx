import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MutableSnapshot, RecoilRoot } from 'recoil'
import { userState, defaultValues } from '@hooks/recoil/user'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(userState, { ...defaultValues, height: 100 })
  }

  return (
    <RecoilRoot {...initializeState}>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
