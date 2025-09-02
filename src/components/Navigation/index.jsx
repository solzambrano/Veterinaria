import {NavList,NavHeader,NavOptions} from './Navigate.style';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
return(
    <>
    <NavList>
    <NavHeader>Veterinaria COQUETOS</NavHeader>
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