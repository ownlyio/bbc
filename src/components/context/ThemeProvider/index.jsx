import { ThemeProvider as SCThemeProvider } from "styled-components";
import React from 'react'
import theme from "./theme";

const ThemeProvider = ({children}) => {
  return (
    <SCThemeProvider theme={theme}>
      { children }
    </SCThemeProvider>
  )
}

export default ThemeProvider
