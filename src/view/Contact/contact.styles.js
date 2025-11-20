import styled from "styled-components";

export const Container = styled.div `
display:grid;
grid-template-columns: repeat(2 , 1fr);
height:750px

`
export const ContainerContactUs = styled.div `
grid-column:1
`
export const ContainerData = styled.div `
height:50%;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
padding-left:10px
`
export const ContainerShowInformation = styled.div `
grid-column:2
`
export const ContainerDirection = styled.div `

`
export const ContainerPhone = styled.div `

`
export const ContainerEmail = styled.div `

`
export const ContainerTime = styled.div `

`
export const Title = styled.h1 `
font-weight:500;
font-family:Cambria;
`
export const Text = styled.p `
font-family:Cambria;
font-weight:500;
`
export const Paragraph = styled(Text)`
color:gray;
font-size:1.1em;
`
export const Subtitle = styled(Text)`
font-size:1.2em;

`