import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export const setCountContext = createContext<Dispatch<SetStateAction<number>>>(() => undefined)
export const useCountSetValue = () => useContext(setCountContext)
