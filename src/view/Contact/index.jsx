import { Paragraph,Container,ContainerContactUs,ContainerData
    ,ContainerDirection,ContainerEmail,ContainerPhone,ContainerShowInformation,
    ContainerTime,Title,Subtitle
 } from "./contact.styles"
import FormContact from "../../components/Form/FormContact/FormContact"
import { useState } from "react"
const Contact = () => {
    const [IsContact,setIsContact] =useState(true)
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
                <ContainerDirection>
                    <Subtitle>Dirección</Subtitle>
                    <Paragraph>Av. La merced 1025, San Salvador de Jujuy-Jujuy-Argentina</Paragraph>
                </ContainerDirection>
                <ContainerPhone>
                    <Subtitle>Teléfono</Subtitle>
                    <Paragraph>+54 388 345678</Paragraph>
                </ContainerPhone>
                <ContainerEmail>
                    <Subtitle>Correo Electronico</Subtitle>
            <Paragraph>contacto@coquetos.com</Paragraph>
            
        </ContainerEmail>
        <ContainerTime>
            <Subtitle>Horario de Atención</Subtitle>
            <Paragraph>
                Lunes a Viernes de 8:00 - 20:00
                Sabados de 08:00 - 14:00
                Por urgencias Guardia las 24 horas
            </Paragraph>
        </ContainerTime>
    </ContainerData>
</ContainerShowInformation>
    </Container>
)
}
export default Contact