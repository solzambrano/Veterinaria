import styled from "styled-components";

export const ContainerService=styled.header`
display:flex;
justify-content:space-between;
margin-top:50px;
`
export const Information= styled.div`
width:60%
`
export const ContainerImage =styled.div`

position:relative;
margin:auto;
`
export const ContainerList = styled.ul`
list-style-type: none;
display:flex;
padding:0px;
`
export const SpanGreen= styled.span`
color:var(--color-Green-s);
`
export const List =styled.li`
  margin: 15px 20px;
`
export const Title =styled.h1`
font-weight:700;
font-size:50px;
`
export const Paragraph =styled.p`
line-height: 25px;
`
export const Span= styled.span`
padding-left:3px;
`
export const Icon =styled.img`
width:24px;
height:24px;
vertical-align:center;
`
export const Imagen= styled.img`
	transform: rotate(5deg);
	object-fit: cover;
	height: 400px;
	border-radius: 50px;
box-shadow: 0 8px 24px rgba(27, 79, 32, 0.46);
`
export const ImagenMascota = styled.img`
position: absolute;
  border-radius: 50%;
  width: 150px;
  right: 65%;
  border: 15px solid white;
  object-fit: cover;
  object-position: left;
  bottom: 0;
}
`