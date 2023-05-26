import { createContext, useContext, useState, useCallback } from 'react'

export const AppContext = createContext({})
export const useAppContext = (): any => useContext(AppContext)

const AppProvider = ({ children, location }: any): any => {
  const values = {
    location
  }

  return <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
}

export default AppProvider