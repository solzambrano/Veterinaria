import styled from 'styled-components'

export const ContainerCard =styled.div`
  margin: 20px 5px;
  gap:24px;
  display:flex;
  width: 250px;
  flex-direction: column; 
  align-items:center;
  box-shadow: 0 8px 24px rgba(27, 79, 32, 0.46);
  border-radius:15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position:relative;

  &:hover {
    transform: scale(1.07);
  }
`;
export const ContainerImage= styled.div`
  margin-top: ${props => props.$isServices ? '30px' : 'inherit'};
  display: flex;
  border-radius: 10px;
  width: ${props => props.$isServices ? '50px' : undefined};
  height: ${props => props.$isServices ? '50px' : undefined};;
  background-color:${props => props.$color};
  &:hover{
  background-color:${props => props.$hover};
  }
`;
export const Imagen = styled.img `
    width: ${props => props.$isServices ? '24px' : '200px'};
    height: ${props => props.$isServices ? '24px' : '200px'};

`; 
export const ContainerDescription= styled.div`
width:235px;
max-width:500px;
display:flex;
flex-direction:column;
gap:2px;
padding-bottom:50px
`;

export const Title =styled.h3` 
color:var(--color-Black);
margin:0px 10px ;
`
const Text =styled.p`
padding:0px 10px;
`
export const Paragraph= styled(Text) `
color:var(--color-Green-secondary);

`
export const ParagraphMas= styled(Text)`
color:var(--color-Green-s);

`
export const Arrow =styled.img `
transition: transform 0.3s ease;
width:24px;
height:24px


`
export const ContainerInfo = styled.a`
display :flex;
align-items:center;
font-weight:700;
position :absolute;
bottom:0;
&:hover  ${Arrow} {
  transform: translateX(6px);
}
` 