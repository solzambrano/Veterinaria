import styled from "styled-components";
export const ContainerCategory =styled.div`
display:flex;
justify-content:center;
cursor:pointer;
:hover{
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
background-image:linear-gradient(to top, #46d841ff 0%, #18df82ff 100%)
}
`;

export const Category =styled.div`
border:1px solid #cef0be;
margin:0px 15px;
text-align:center;
padding:15px 0px;
border-radius:20px;
width:250px;
background-image: linear-gradient(to top, #9be15d 0%, #00e3ae 100%);

`
export const ImageCategory =styled.img`
width:20px;

`
export const TitleCategory = styled.h3`
pointer-events: none;

`
