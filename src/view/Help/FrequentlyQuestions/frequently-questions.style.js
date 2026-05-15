import styled from "styled-components";

export const Container=styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items: center;
margin-top:45px;

`
export const ContainerMoreQuestion =styled.div`
cursor:pointer;
display:flex;
color:var(--color-Gray);
justify-content:center;
padding:25px;

`
export const Paragraph =styled.p`
font-size:30px;
font-weight:700;
margin:0px;
`
export const SectionTitle =styled.h2`
text-transform:capitalize;
`

export const Subparagraph=styled.p`
color:var(--color-Gray);
font-size:15px;
`
export const Icons =styled.img`
width:30px;
padding-right:15px;
`
export const ContainerContact =styled.div`
background-color:var(--color-Green-fondo);
width:70%;
margin:auto;
display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
padding-left:15px;
`
export const TitleContact = styled.h2`
 grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`
export const TextContact = styled.span`
 grid-column: 1 / span 1;
  grid-row: 2 / span 2;
`
export const Button =styled.button`
 grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  width:30%;
  margin:auto;
  height:40%;
  border-radius:5px;
`
