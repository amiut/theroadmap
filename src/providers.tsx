import React from 'react';
import { ThemeContextProvider } from '@contexts/ThemeContext'

const Providers: React.FC = ({children}) => {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  )
}

export default Providers;
