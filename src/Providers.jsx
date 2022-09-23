import ThemeProvider from "./context/ThemeProvider";

const Providers = ({children}) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Providers