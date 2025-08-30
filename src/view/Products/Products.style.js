import styled from 'styled-components'

export const ContainerProducts = styled.div `
    display:flex;
    color:red;
    flex-wrap:wrap;
    justify-content: space-between;
`;
export const Imagen = styled.img `
    width: 200px;
    height:200px;
`; 
export const ContainerProduct =styled.div`
  border:1px solid gray;
  margin: 5px 5px;
  gap:24px;
  display:flex;
  width: 20%;
  flex-direction: column; 
  align-items:center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  
`;

export const ContainerDescription= styled.div`
  color:blue;
`;

export const ContainerImage =styled.div`
  width: fit-content;
  height: auto;
  max-width: 100%;
`;
export const ContainerList =styled.ul`
list-style-type:none;
display: flex;
justify-content: space-around;
cursor:pointer;
`;