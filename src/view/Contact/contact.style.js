import styled from "styled-components";

export const Container = styled.div `
display:grid;
grid-template-columns: repeat(2 , 1fr);
width:80%;
margin:auto;
padding-top:50px
`
export const ContainerContactUs = styled.div `
grid-column:1;
`
export const ContainerTitle =styled.div`
display:flex;
gap:0.75rem;
flex-direction:column;
margin:0px;
`
export const ContainerData = styled.div `
height:35%;
box-shadow: 2px 2px 5px rgb(161, 161, 158);
padding:20px 25px;
background-color:var(--color-white);
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
font-weight:900;
font-family:var(--font);
font-size:3rem;
letter-spacing:-0.01em;
margin:0px
`
export const Subtitle =styled.h3`
font-family:var(--font);
font-weight:700;
`
export const Text = styled.p `
font-family:var(--font)
font-weight:500;
`
export const Paragraph = styled(Text)`
color:var(--color-Gray);
font-size:20px;
margin-top:5px
`
export const Subparagraph = styled(Text)`
font-size:1.2em;
font-weight:600;
padding:0px 25px

`