import styled from "styled-components";

export const Form = styled.form `
position: relative;
height:60%
`
export const Label = styled.label `
display:inline-block;
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
padding:15px;
color:var(--color-Gray);
font-size:1em;
margin-top:10px
`

export const TextArea = styled.textarea`
display:flex;
align-items:center;
width: 90%;
margin:0px;
height:150px;
border:none;
resize:none;
border-radius:5px;
font-size:16px;
color:var(--color-Gray);
line-height:1.5;
padding:15px;
min-height:9rem;
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
