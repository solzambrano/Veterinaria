import styled from 'styled-components'


export const ContainerCard =styled.div`
  margin: 10px 5px;
  gap:24px;
  display:flex;
  width: 250px;
  flex-direction: column; 
  align-items:center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius:15px;
`;
export const ContainerImage= styled.div`
  width: fit-content;
  height: auto;
`;
export const Imagen = styled.img `
    width: 200px;
    height:200px;
`; 
export const ContainerDescription= styled.div`
width:235px;
margin:0 auto;
height:120px;
`;

export const Title =styled.h3`
color:black;
margin:0px 10px ;
`
export const Paragraph= styled.p `
color:green;
padding:0px 10px
`