import styled from "styled-components";
import { buttonVariants } from "../../styles/GlobalStyles";


export const ButtonStyle =styled.button`
 grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  width:200px;
  padding:20px;
  margin:auto;
  height:65px;
  border-radius:15px;
  border-color:transparent;
  background-color:${({ variant }) => buttonVariants[variant]?.bg};
  font-weight:700;
  display:flex;
`
export const Icon =styled.img `
padding:0px 10px;

`