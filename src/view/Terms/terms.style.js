import styled from "styled-components";

export const Text =styled.p`
font-family:var(--font)
`
export const ContainerTerms = styled.div `
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 25px;
margin:25px;
`
export const Title = styled.h1`
font-weight:800;
font-family:var(--font);
`

export const Paragraph = styled(Text)`
font-size:1rem;
font-weight:550;
`

export const ListOrdered = styled.ol`
padding-left:15px;
`

export const ListUnordered = styled.ul`
padding-left:15px;
 list-style-type: disc; 
`

export const Item = styled.li`
border: 1px solid #eadbdb;
  border-left: none;
  border-right: none;
  margin: 25px 0px;
  padding: 30px 10px;
  ul & {
    border: none;
  padding: 5px;
  margin: 5px 0px;
  color:var(--color-Gray);
    }

`
export const Subparagraph =styled(Text)`
color:var(--color-Gray);

`
export const Detail= styled.details`
  img {
    transition: transform 0.3s ease;
    transform: rotate(180deg);
  }

  &[open] img {
    transform: rotate(360deg);
  }
`
export const Sumary = styled.summary`
cursor:pointer;
list-style:none;
display: flex;
justify-content: space-between;
font-size:18px


`
export const Image =styled.img`
width:20px;
`