import styled from "styled-components";

export const Text =styled.p`

`
export const ContainerTerms = styled.div `

`
export const Title = styled.h1`

`

export const Paragraph = styled(Text)`

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


`
export const Image =styled.img`
width:20px;
`