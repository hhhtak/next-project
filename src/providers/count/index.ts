import { createContext, useContext, Dispatch, SetStateAction } from 'react'

export const countContext = createContext<number>(0)
export const useCountValue = () => useContext(countContext)

export const setCountContext = createContext<Dispatch<SetStateAction<number>>>(() => undefined)
export const useCountSetValue = () => useContext(setCountContext)
