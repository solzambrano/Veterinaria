import { Paragraph,Container,ContainerContactUs,ContainerData
    ,ContainerInfoContact,ContainerShowInformation,Title,Subtitle,Icons
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
            <Title>¿Cómo podemos ayudarte?</Title>
            <Paragraph>Estamos aqui para responder a tus preguntas, si tienes alguna duda 
                que no este en las preguntas frecuentes, puedes rellenar el formulario
                y nos pondremos en contacto contigo lo antes posible.
            </Paragraph>
            <FormContact IsContact={IsContact}></FormContact>
        </ContainerContactUs>
        <ContainerShowInformation>
            <Title>Información de contacto</Title>
            <ContainerData>
                <ContainerInfoContact>
                    <Icons src={Location}></Icons>
                    <Subtitle>Dirección:</Subtitle>
                    <Paragraph>Av. La merced 1025, San Salvador de Jujuy-Jujuy-Argentina</Paragraph>
                </ContainerInfoContact>
                <ContainerInfoContact>
                    <Icons src={Phone}></Icons>
                    <Subtitle>Teléfono: </Subtitle>
                    <Paragraph>+54 388 345678</Paragraph>
                </ContainerInfoContact>
                <ContainerInfoContact>
                    <Icons src={Mail}></Icons>
                    <Subtitle>Correo Electronico: </Subtitle>
                    <Paragraph>contacto@coquetos.com</Paragraph>
                </ContainerInfoContact>
                <ContainerInfoContact>
                    <Icons src={Clock}></Icons>
                    <Subtitle>Horario de Atención: </Subtitle>
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