import styled from "styled-components";

export const Form = styled.form `
position: relative;
height:60%
`
export const Label = styled.label `
display:inline-block;
font-family:var(--font);
box-sizing:border-box;
margin-right:40px;
width:100%
`
export const ContainerLabel = styled.div`
display:flex;
padding-bottom: 25px;
`
export const Input =styled.input `
border:none;
border-radius:5px;
width:100%;
height:25px;
color:var(--color-Gray);
font-size:1em;
`

export const TextArea = styled.textarea`
display:flex;
align-items:center;
width: 90%;
margin:0px;
height:200px;
border:none;
resize:none;
border-radius:5px;
font-size:15px;
font-family:var(--font);
color:var(--color-Gray);
`

export const ButtonSend =styled.button `
background-color:var(--color-Green-s);
width:50%;
height:50px;
border:none;
border-radius:5px;
font-size: 15px;
font-weight: 600;
margin: auto;
  display: block;
  margin-top: 25px;
`
