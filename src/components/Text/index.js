import styled from 'styled-components'
import { tags, sizes } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "20px",
  },
  [sizes.LG]: {
    fontSize: "24px",
  },
  [sizes.XL]: {
    fontSize: "40px",
  },
  [sizes.XXL]: {
    fontSize: "64px",
  },
};


export const Text = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fontSize ?? '16px'};
  font-weight: ${( props ) => (props.bold ? 600 : 400)};
  line-height: 1.5;
`

export const Heading = styled(Text).attrs({bold: true})`
${(props) => style[props.size || sizes.MD]}
  font-weight: 600;
  line-height: 1.2;
${props => props.fontSize && `
  font-size: ${props.fontSize};
`}
`