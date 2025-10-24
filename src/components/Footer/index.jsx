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
                <Paragraph><NavLink to='terms'> Términos del Servicio</NavLink></Paragraph>
                <Paragraph><NavLink to='contact'>Contacto</NavLink></Paragraph>
            </ContainerParagraph>
            <ContainerIcons>
               <a href='https://www.facebook.com/'><Icons src={Facebook} alt='icono facebook'></Icons></a> 
               <a href="https://x.com/?lang=es"> <Icons src={Twitter} alt='icono twitter'></Icons> </a>
               <a href="https://www.instagram.com/">  <Icons src={Instagram} alt='icono instagram'></Icons></a>
            </ContainerIcons>
            <ContainerParagraph>
            <Reserved> @ Veterinaria Coquetos, todos los derechos reservados</Reserved>
            </ContainerParagraph>
        </ContainerFooter>
    )
}
export default Footer