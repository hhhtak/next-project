import { createContext, useContext, useState, FC } from 'react'

export const countContext = createContext<number>(0)
export const useCountValue = () => useContext(countContext)
