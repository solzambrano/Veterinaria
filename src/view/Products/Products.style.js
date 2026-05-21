import styled from 'styled-components'

export const ContainerProducts = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;
export const ContainerList =styled.ul`
list-style-type:none;
display: flex;
padding-left:0px;
cursor:pointer;
`;
export const TitleProducts =styled.h1`
font-family:var(--font);
padding-left: 15px;
`;
export const Lista =styled.li `
  margin:0px 20px;
  background-color: var(--color-Green-light);
  border-radius: 20px;
  width: 100px;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
`


export const ContainerSectionProducts =styled.div ` 
width:85%;
margin:0 auto;
  min-height: 100vh;
`