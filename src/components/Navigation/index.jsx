import {NavList,NavHeader,NavOptions,Logo,NavContainerLogo} from './Navigate.style';
import { NavLink } from 'react-router-dom';
import VeterinaryIcon from '../../assets/icons/veterinaria.svg'

const Navigation = () => {
return(
    <>
    <NavList>
        <NavContainerLogo>
    <Logo src={VeterinaryIcon} alt="Home" />
    <NavHeader>Veterinaria COQUETOS</NavHeader>
        </NavContainerLogo>
    <NavOptions>
        <li>Servicios</li>
        <li>Citas</li>
        <li>Tienda</li>
        <li>Sobre nosotros</li>
        <li>Contactanos</li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Registrate</NavLink></li>
    </NavOptions>
    </NavList>
    </>
)
};
export default Navigation;