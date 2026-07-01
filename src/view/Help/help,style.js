import styled from "styled-components";

export const ParagraphGreen = styled.span`
color:var(--color-Green-s);
font-family:var(--font)
`
export const ContainerHelp =styled.div`
width:90%;
display:flex;
flex-direction:column;
align-items:center;
margin: 0 auto;
`
export const TitleHelp =styled.h1`
font-size:4em;
font-weight:800;
width:50%;
font-family:var(--font);

`
export const Paragraph =styled.p`
font-size:18px;
color:var(--color-Gray);
letter-spacing:2px;
margin-bottom:30px;
font-family:var(--font);

`
export const ContainerHelpCategory =styled.div`
width:100%;
`
export const CategorySectionHelp =styled.div`
background-color:var(--color-Terra);
padding:25px 0px;
margin-top:40px;
`
export const SubtitleCategory =styled.h2`
padding-left:50px;
font-family:var(--font);

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
export const TitleContact = styled.h3`
 grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  font-family:var(--font);
`
export const TextContact = styled.span`
 grid-column: 1 / span 1;
  grid-row: 2 / span 2;
  font-family:var(--font);
`
