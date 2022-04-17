import React, { createContext, ReactNode, useState } from 'react';

interface IFormContext {
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormContext = createContext({} as IFormContext)

interface IFormContextProvider {
  children: ReactNode;
}

export function FormContextProvider({ children }: IFormContextProvider) {
  const [isValid, setIsValid] = useState(false);

  return (
    <FormContext.Provider value={{ isValid, setIsValid }}>
      {children}
    </FormContext.Provider>
  )
}