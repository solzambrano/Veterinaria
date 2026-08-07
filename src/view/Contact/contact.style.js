import styled from "styled-components";

export const ContainerContact = styled.main `
display:grid;
grid-template-columns: repeat(2 , 1fr);
width:80%;
margin:auto;
padding-top:50px;
padding-bottom:40px;
`
export const ContainerContactUs = styled.section `
grid-column:1;
`
export const ContainerTitle =styled.div`
display:flex;
gap:0.75rem;
flex-direction:column;
margin:0px;
`
export const ContainerInformation = styled.section `
grid-column:2;
padding-left:25px;

`
export const ContainerData = styled.article`
box-shadow: 2px 2px 5px rgb(161, 161, 158);
background-color:var(--color-White);
height:fit-content;
padding:30px
`
export const ContainerInfoContact = styled.article `
display:flex;
gap:1em;
`
export const ContainerDataContact =styled.article`
display:inline-block;
width:90%
`
export const Icons =styled.img`
width:30px;
filter:invert(79%) sepia(63%) saturate(2380%) hue-rotate(81deg) brightness(94%) contrast(88%);
`
export const Title = styled.h1 `
font-weight:900;
font-size:3rem;
letter-spacing:-0.01em;
margin:0px
`
export const Subtitle =styled.h3`

font-weight:700;
font-size: 1.5rem;
line-height: 2rem;
margin: 0px;
padding-bottom: 20px;
}
`
export const Text = styled.p `

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
margin:0px

`