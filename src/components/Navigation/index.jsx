import {NavList,NavHeader,Lista, NavOptions,Logo,NavContainerLogo} from './Navigate.style';
import { NavLink } from 'react-router-dom';
import VeterinaryIcon from '../../assets/icons/veterinaria.svg'

const Navigation = () => {
return(
    <>
    <NavList>
       <NavContainerLogo>
        <NavLink to='/'> 
            <Logo src={VeterinaryIcon} alt="Home" />
            <NavHeader>Veterinaria COQUETOS</NavHeader>
            </NavLink>
        </NavContainerLogo>
        <NavOptions>
            <Lista>Servicios</Lista>
            <Lista>Citas</Lista>
            <Lista>Tienda</Lista>
            <Lista>Sobre nosotros</Lista>
            <Lista>Contactanos</Lista>
            <Lista>Ayuda</Lista>
            <Lista><NavLink to="/login">Login</NavLink></Lista>
        </NavOptions>
    </NavList>
    </>
)
};
export default Navigation;