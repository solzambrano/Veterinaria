import styled from "styled-components";
import { GlobalStyles} from "../../styles/GlobalStyles";

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
margin:10px
`
export const ListaTitulos = styled.ol`

`
export const ListaItems =styled.ul`

`
export const Items =styled.li`

`
export const ContainerPrincipal = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
width:80%;
margin:auto;
`
export const ContainerImage =styled.div`
margin:auto
`
export const ContainerBodyText = styled.div`
flex-direction:column
`