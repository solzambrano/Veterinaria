import styled from "styled-components";
import { buttonVariants } from "../../styles/GlobalStyles";


export const ButtonStyle =styled.button`
 grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  width:30%;
  margin:auto;
  height:40%;
  border-radius:15px;
  border-color:transparent;
  background-color:${({ variant }) => buttonVariants[variant]?.bg};
  text-color:black;
  font-weight:700;
`