import {NavList,NavHeader,Lista, NavOptions,Logo,NavContainerLogo} from './Navigate.style';
import { NavLink } from 'react-router-dom';
import VeterinaryIcon from '../../assets/icons/veterinary-care.svg'

const Navigation = () => {
return(
    <>
    <NavList>
       <NavContainerLogo>
        <NavLink to='/' end> 
            <Logo src={VeterinaryIcon} alt="Home" />
            <NavHeader>Veterinaria COQUETOS</NavHeader>
            </NavLink>
        </NavContainerLogo>
        <NavOptions>
           <NavLink to='services'> Servicios</NavLink>
            <NavLink>Citas</NavLink>
           <NavLink to='products' >Tienda </NavLink>
            Sobre nosotros
            <NavLink to='contact-us'>Contactanos </NavLink>
            <NavLink to ='help-support'> Ayuda</NavLink>
            <NavLink to="/login">Login</NavLink>
        </NavOptions>
    </NavList>
    </>
)
};
export default Navigation;