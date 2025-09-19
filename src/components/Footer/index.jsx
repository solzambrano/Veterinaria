import { ContainerFooter,Icons, Reserved, ContainerParagraph,Paragraph,ContainerIcons } from "./footer.style"
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Instagram from '../../assets/icons/instagram.svg';
import { NavLink } from "react-router";

const Footer = () => {
    return(
        <ContainerFooter>
            <ContainerParagraph>
                <Paragraph><NavLink to='politic'>Politica de Privacidad </NavLink></Paragraph>
                <Paragraph><NavLink to='terms'> Térmios del Servicio</NavLink></Paragraph>
                <Paragraph><NavLink to='contact'>Contacto</NavLink></Paragraph>
            </ContainerParagraph>
            <ContainerIcons>
                <Icons src={Facebook} alt='icono facebook'></Icons>
                <Icons src={Twitter} alt='icono twitter'></Icons>
                <Icons src={Instagram} alt='icono instagram'></Icons>
            </ContainerIcons>
            <ContainerParagraph>
            <Reserved> @ Veterinaria Coquetos, todos los derechos reservados</Reserved>
            </ContainerParagraph>
        </ContainerFooter>
    )
}
export default Footer