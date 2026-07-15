import { Paragraph,Container,ContainerContactUs,ContainerData
    ,ContainerInfoContact,ContainerTitle,ContainerShowInformation,Subtitle,Title,Subparagraph,Icons
 } from "./contact.style"
import Clock from '../../assets/icons/clock.svg'
import Phone from '../../assets/icons/phone.svg'
import Mail from '../../assets/icons/mail.svg'
import Location from '../../assets/icons/location.svg'
import FormContact from "../../components/Form/FormContact/FormContact"
import { useRef } from "react"
const Contact = () => {
    const IsContact =useRef(true)
return(
    <Container>
        <ContainerContactUs>
            <ContainerTitle>
            <Title>¿Cómo podemos ayudarte?</Title>
            <Paragraph>Estamos aqui para responder a tus preguntas, si tienes alguna duda 
                , puedes rellenar el formulario y nos pondremos en contacto contigo lo antes posible.
            </Paragraph>
            </ContainerTitle>
            <FormContact IsContact={IsContact}></FormContact>
        </ContainerContactUs>
        <ContainerShowInformation>
            <Subtitle>Información de contacto</Subtitle>
            <ContainerData>
                <ContainerInfoContact>
                    <Icons src={Location}></Icons>
                    <Subparagraph>Dirección:</Subparagraph>
                    <Paragraph>Av. La merced 1025, San Salvador de Jujuy-Jujuy-Argentina</Paragraph>
                </ContainerInfoContact>
                <ContainerInfoContact>
                    <Icons src={Phone}></Icons>
                    <Subparagraph>Teléfono: </Subparagraph>
                    <Paragraph>+54 388 345678</Paragraph>
                </ContainerInfoContact>
                <ContainerInfoContact>
                    <Icons src={Mail}></Icons>
                    <Subparagraph>Correo Electronico: </Subparagraph>
                    <Paragraph>contacto@coquetos.com</Paragraph>
                </ContainerInfoContact>
                <ContainerInfoContact>
                    <Icons src={Clock}></Icons>
                    <Subparagraph>Horario de Atención: </Subparagraph>
                    <Paragraph>
                        Lunes a Viernes de 8:00 - 20:00
                        Sabados de 08:00 - 14:00
                        Por urgencias Guardia las 24 horas
                    </Paragraph>
                </ContainerInfoContact>
            </ContainerData>
        </ContainerShowInformation>
    </Container>
)
}
export default Contact