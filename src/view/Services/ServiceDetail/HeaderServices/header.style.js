import styled from "styled-components";

export const Header = styled.header` 
display:grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap:3rem;
align-items:center;
max-width:80rem;
margin:auto;
margin-top:35px;
`
export const ArticleText =styled.article`

`
export const SpanAvailable =styled.span`
border-radius: 15px;
  background-color: pink;
  border: 1px solid pink;
  padding: 5px 30px;
  color: brown;
  font-size: 18px;
  font-weight: 700;
`