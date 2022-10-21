const breakpointMap = {
  xxs: 310,
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
};

const mediaQueries = {
  xxs: `@media screen and (min-width: ${breakpointMap.xxs}px)`,
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const colors = {
  primary: '#906003',
  secondary: '#bc9849',
  tertiary: '#c59535',
  bgColor: '#f4b621',
  dark: '#2a2a29',
  light: '#ffeac1',
  
}

const theme = {
  colors,
  mediaQueries
}

export default theme;