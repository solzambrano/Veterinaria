import styled from 'styled-components'

export const ContainerCard =styled.div`
  margin: 20px 15px;
  gap:24px;
  display:flex;
  width: 250px;
  flex-direction: column; 
  align-items:center;
  box-shadow: 0 8px 24px rgba(27, 79, 32, 0.46);
  border-radius:15px;
`;
export const ContainerImage= styled.div`
  width: fit-content;
  height: auto;
  margin-top: ${props => props.$isServices ? '30px' : 'inherit'};
`;
export const Imagen = styled.img `
    width: ${props => props.$isServices ? '24px' : '200px'};
    height: ${props => props.$isServices ? '24px' : '200px'};

`; 
export const ContainerDescription= styled.div`
width:235px;
margin:0 auto;
height:auto;
`;

export const Title =styled.h3` 
color:var(--color-Black);
margin:0px 10px ;
`
export const Paragraph= styled.p `
color:var(--color-Green-secondary);
padding:0px 10px
`