import styled from "styled-components";

export const Form = styled.form `
position: relative;
height:60%
`
export const Label = styled.label `
margin: 20px;
width:40%;
display:inline-block;
width: ${props => props.IsComment ? '70%' : '40%'};
font-family:var(--font)


`
export const Input =styled.input `
margin-left:10px;
border:none;
box-shadow:2px 2px 5px rgb(161, 161, 158)
border-radius:5px;
width:200px;
height:25px;
color:var--(color-Gray);
font-size:1em;
`

export const TextArea = styled.textarea`
display:flex;
align-items:center;
width: 100%;
margin: 10px 45px;
height:200px;
border:none;
resize:none;
border-radius:5px;
font-size:15px;
`

export const ButtonSend =styled.button `
position:absolute;
bottom : 0 ;
left:18%;
background-color:var(--color-Green-s);
width:50%;
height:30px;
border:none;
border-radius:5px;
font-size: 15px;
font-weight: 600;
`
