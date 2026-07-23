import styled from 'styled-components'

export const NavList =styled.nav`
  display :flex;
  justify-content:space-between;
  padding:0px 15px;
  a{
    text-decoration:none;
    color:var(--color-Black);
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
&:hover {
    color: var(--color-Green-s);;

  }
 
  
`;
export const NavHeader =styled.h2`
  display :flex;
  
`;

export const NavOptions =styled.ul`
  list-style-type:none;
  display:flex;
  width:50%;
  font-size:20px;
  justify-content:space-around;
  a{
  text-decoration:none;
  color:var(--color-Black);
  }


  
`;
export const Logo = styled.img `
    width: 20px;
    height:20px;
    margin-right:15px
`; 
export const Lista =styled.li `
color:var(--color-Black);
:visited{
color:var(--color-Green-s)}

`