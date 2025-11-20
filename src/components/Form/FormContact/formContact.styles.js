import styled from "styled-components";

export const Form = styled.form `
position: relative;
height:60%
`
export const Label = styled.label `
margin: 20px;
width:40%;
display:inline-block;
box-shadow: 2px 2px 5px rgba(230, 220, 220, 0.1);
width: ${props => props.IsComment ? '70%' : '40%'};


`
export const Input =styled.input `
margin-left:10px;
border:none;

`


export const TextArea = styled.textarea`
display:flex;
align-items:center;
width: 100%;
margin: 10px 45px;
height:200px;
border:none;
resize:none
`

export const ButtonSend =styled.button `
position:absolute;
bottom : 0 ;
left:25%;
background-color:#37df37;
width:50%;
height:30px;
border:none;
`
