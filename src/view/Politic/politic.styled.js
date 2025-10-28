import styled from "styled-components";

export const StyledText= styled.p`
color:var(--color-Green);
`
export const Title= styled(StyledText)`
font-size:2em;
font-weight:700
`

export const Subtitle =styled(StyledText)`
font-size:1.3em;
font-weigth:500;
`
export const Paragraph = styled.p`
color:  ${props => props.date? 'gray': ''};
font-size:1.1em;
`
export const ListaTitulos = styled.ol`
margin-left:10%;

`
export const ListaItems =styled.ul`

list-style-position: outside;
list-style-type:disc;
`
export const Items =styled.li`
line-height: 20px;
`
export const ContainerPrincipal = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
width:80%;
margin:auto;
`
export const ContainerImage =styled.div`
margin:auto;
width:75%
`
export const ContainerBodyText = styled.div`
flex-direction:column;
margin-top:15%
`

export const Imagen = styled.img`
width:100%
`