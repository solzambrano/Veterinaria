import styled from "styled-components";

export const Text =styled.p`
font-family:var(--font)
`
export const ContainerTerms = styled.div `
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding:35px:
`
export const Title = styled.h1`
font-weight:800;
`

export const Paragraph = styled(Text)`
font-size:16px;
font-weight:550;
`

export const List = styled.ol`

`

export const Item = styled.li`
border: 1px solid #eadbdb;
  border-left: none;
  border-right: none;
  margin: 25px 0px;
  padding: 30px 10px;

`
export const Subparagraph =styled(Text)`
color:gray;

`
export const Detail= styled.details`
  img {
    transition: transform 0.3s ease;
  }

  &[open] img {
    transform: rotate(180deg);
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