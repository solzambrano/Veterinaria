import { Paragraph,ContainerContact,ContainerContactUs ,ContainerInfoContact,
    ContainerTitle,ContainerData,ContainerDataContact,ContainerInformation,
    Subtitle,Title,Subparagraph,Icons} from "./contact.style"
import LocationMaps from "./Locationmap"
import Clock from '../../assets/icons/clock.svg'
import Phone from '../../assets/icons/phone.svg'
import Mail from '../../assets/icons/mail.svg'
import Location from '../../assets/icons/location.svg'
import FormContact from "../../components/Form/FormContact/FormContact"
import { useRef } from "react"
const Contact = () => {
    const IsContact =useRef(true)
return(
    <ContainerContact>
        <ContainerContactUs>
            <ContainerTitle>
                <Title>¿Cómo podemos ayudarte?</Title>
                <Paragraph>Estamos aqui para responder a tus preguntas, si tienes alguna duda 
                , puedes rellenar el formulario y nos pondremos en contacto contigo lo antes posible.
                </Paragraph>
            </ContainerTitle>
            <FormContact IsContact={IsContact}/>
        </ContainerContactUs>
        <ContainerInformation>
            <ContainerData>
                     <Subtitle>Información de contacto</Subtitle>
            <ContainerInfoContact>
                <Icons src={Location}/>
                <ContainerDataContact>
                    <Subparagraph>Dirección:</Subparagraph>
                    <Paragraph>Av. Hipolito Yrigoyen, San Salvador de Jujuy-Jujuy-Argentina</Paragraph>
                </ContainerDataContact>
            </ContainerInfoContact>
            <ContainerInfoContact>
                <Icons src={Phone}/>
                <ContainerDataContact>
                    <Subparagraph>Teléfono: </Subparagraph>
                    <Paragraph>+54 388 8888888</Paragraph>
                </ContainerDataContact>
            </ContainerInfoContact>
            <ContainerInfoContact>
                <Icons src={Mail}/>
                <ContainerDataContact>    
                    <Subparagraph>Correo Electronico: </Subparagraph>
                    <Paragraph>contacto@coquetos.com</Paragraph>
                </ContainerDataContact>
            </ContainerInfoContact>
            <ContainerInfoContact>
                <Icons src={Clock}/>
                <ContainerDataContact>
                    <Subparagraph>Horario de Atención: </Subparagraph>
                    <Paragraph>
                        Lunes a Viernes de 8:00 - 20:00 --
                        Sabados de 08:00 - 14:00 --
                        Urgencias: Atención las 24 horas
                    </Paragraph>
                </ContainerDataContact>
            </ContainerInfoContact>
            </ContainerData>
        <LocationMaps/>       
        </ContainerInformation>
    </ContainerContact>
)
}
export default Contact