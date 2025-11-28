import styled from "styled-components";

export const Container = styled.div `
display:grid;
grid-template-columns: repeat(2 , 1fr);
height:720px

`
export const ContainerContactUs = styled.div `
grid-column:1
`
export const ContainerData = styled.div `
height:50%;
box-shadow: 2px 2px 5px rgb(161, 161, 158);
padding:20px 25px;
background-color:white;
`
export const ContainerShowInformation = styled.div `
grid-column:2
`
export const ContainerInfoContact = styled.div `
display:flex;
align-items:center;
`
export const Icons =styled.img`
width:30px;
`
export const Title = styled.h1 `
font-weight:700;
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
font-weight:600;
padding:0px 25px

`