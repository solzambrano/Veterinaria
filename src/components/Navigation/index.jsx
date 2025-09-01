import {NavList,NavHeader,NavOptions} from './Navigate.style'
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
        <li><a href=''>Login</a></li>
        <li><a href=''>Registrarse</a></li>
    </NavOptions>
    </NavList>
    </>
)
};
export default Navigation;