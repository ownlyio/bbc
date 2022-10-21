import { useContext } from 'react'
import { ThemeContext as StyledThemeCopntext } from 'styled-components'

const useTheme = () => {
  const theme = useContext(StyledThemeCopntext)
  return { theme }
}

export default useTheme