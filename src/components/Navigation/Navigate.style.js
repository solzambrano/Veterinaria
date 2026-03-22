import styled from 'styled-components'

export const NavList =styled.nav`
  display :flex;
  justify-content:space-between;
  padding:0px 15px;
  a{
    text-decoration:none;
    color:black;
    display:ruby
  }
   a:hover {
    color: var(--color-Green-s);
  }
  a.active {
    color: var(--color-Green-s);;
    font-weight: bold;
  }
 
  
`;
export const NavContainerLogo =styled.div`
  display :flex;
 align-items: center;
 flex-direction:row;

 
  
`;
export const NavHeader =styled.h1`
  display :flex;
  font-size:20px;
  
`;

export const NavOptions =styled.ul`
  list-style-type:none;
  display:flex;
  width:50%;
  justify-content:space-around;
  a{
  text-decoration:none;
  color:black;
  }


  
`;
export const Logo = styled.img `
    width: 20px;
    height:20px;
    margin-right:15px
`; 
export const Lista =styled.li `
color:black;
:visited{
color:var(--color-Green-s)}

`