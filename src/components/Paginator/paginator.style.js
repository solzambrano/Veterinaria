import styled from "styled-components";

export const Container = styled.div`
  
      display: flex;
    align-items: center;
  justify-content: center;

`
export const ContainerPaginator= styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

` 
export const List = styled.li`
list-style-type: none;
  display: inline-block;
`
export const Button =styled.button`
margin:20px;
border-radius:50px;
width:40px;
height:40px;
background-color:transparent;
   &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
&:hover{
background-color: var(--color-Green-paginator);
}
${({ $isActive }) => $isActive && `background-color: #43f67a;`}
}
}
`