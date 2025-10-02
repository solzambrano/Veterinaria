import styled from 'styled-components'

export const ContainerProducts = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;
export const ContainerList =styled.ul`
list-style-type:none;
display: flex;
justify-content: start;
cursor:pointer;
`;
export const TitleProducts =styled.h1`

`;
export const Lista =styled.li `
margin:0px 20px;
background-color: #c9ead1;
  border-radius: 20px;
  width: 100px;
  text-align: center;
`

export const ContainerSpinner =styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


export const ImagenSpinner =styled.img ` 
width:100px;
height:100px
`
export const ContainerSectionProducts =styled.div ` 

  min-height: 100vh;
`