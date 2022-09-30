import ThemeProvider from "./context/ThemeProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Providers = ({children}) => {
  return (
    <ThemeProvider>
      {children}
      <ToastContainer />
    </ThemeProvider>
  )
}

export default Providers