import { Paragraph } from "../Politic/politic.styles"

const Contact = () => {
return(
    <Container>
        <ContainerContactUs>
            <Title>¿Cómo podemos ayudarte?</Title>
            <Paragraph>Estamos aqui para responder a tus preguntas, si tienes alguna duda 
                que no este en las preguntas frecuentes, puedes rellenar el formulario
                y nos pondremos en contacto contigo lo antes posible.
            </Paragraph>
        
        </ContainerContactUs>
<ContainerShowInformation>
    <Title>Información de contacto</Title>
    <ContainerData>
        <ContainerDirection>
            <Subtitle>Dirección</Subtitle>
            Av. La merced 1025, San Salvador de Jujuy-Jujuy-Argentina
        </ContainerDirection>
        <ContainerPhone>
            <Subtitle>Teléfono</Subtitle>

            +54 388 345678
        </ContainerPhone>
        <ContainerEmail>
            <Subtitle>Correo Electronico</Subtitle>
            
            contacto@coquetos.com
        </ContainerEmail>
        <ContainerTime>
            <Subtitle>Horario de Atención</Subtitle>
            
            Lunes a Viernes de 8:00 - 20:00
            Sabados de 08:00 - 14:00
            Por urgencias Guardia las 24 horas
        </ContainerTime>
    </ContainerData>
</ContainerShowInformation>
    </Container>
)
}
export default Contact