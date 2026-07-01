import styled from "styled-components";

export const Subparagraph =styled.p`
color:var(--color-Gray);
font-family:var(--font);
`

export const Unorder = styled.ul`
list-style-type: square

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
    color: var(--color-Gray);
    }

`
export const Image =styled.img`
width:20px;
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
font-size:20px;
&:hover {
color:var(--color-Green-s);
}


`