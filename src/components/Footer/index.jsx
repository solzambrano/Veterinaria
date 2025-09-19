import { ContainerFooter,Icons, Reserved, ContainerParagraph,Paragraph,ContainerIcons } from "./footer.style"
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Instagram from '../../assets/icons/instagram.svg';


const Footer = () => {
    return(
        <ContainerFooter>
            <ContainerParagraph>
                <Paragraph>Politica de Privacidad</Paragraph>
                <Paragraph>Terminos del Servicio</Paragraph>
                <Paragraph>Contacto</Paragraph>
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