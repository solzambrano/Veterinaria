import { ContainerPrincipal,ContainerImage,Title,Imagen,Subtitle,ContainerBodyText,Paragraph,ListaTitulos,ListaItems,Items } from "./politic.styles"

const Politic = () => {
return(
    <>
    <ContainerPrincipal>
        <ContainerBodyText>
            <Title> Política de Privacidad</Title>
            <Paragraph date={true}>Última actualizacion: 15 de Octubre de 2025</Paragraph>
            <Paragraph>En Veterinaria Coquetos, estamos comprometidos a proteger la privacidad de nuestros clientes y sus mascotas.Esta política de privacidad explica como recopilamos
                ,usamos, y protegemos tu información personal, cuando visita nuestro sitio web y utiliza nuestros servicios.
            </Paragraph>
        </ContainerBodyText>
    <ContainerImage> <Imagen src="../../public/images/seguridad.png"></Imagen></ContainerImage>
    </ContainerPrincipal>
    <ListaTitulos>
        <Items><Subtitle>Recopilación de Información</Subtitle></Items>
        <Paragraph>Recopilamos información sobre usted y su mascota cuando nos la proporciona directamente.Esto incluye los siguientes casos:</Paragraph>
        <ListaItems>
            <Items>Cuando registra una cuenta en nuestro sitio web.</Items>
            <Items>Cuando reserva una cita para su mascota.</Items>
            <Items>Al contactarnos con preguntas o comentarios.</Items>
            <Items>Al completar el historial clínico de su mascota.</Items>
        </ListaItems>
        <Items><Subtitle>Uso de la Información</Subtitle></Items>
        <Paragraph>La información ue recopilamos se utiliza para los siguientes propósitos:</Paragraph>
        <ListaItems>
            <Items>Gestionar citas y enviar recordatorios.</Items>
            <Items>Mantener un historial clínico completo y preciso de su mascota.</Items>
            <Items>Comunicarnos con usted sobre la salud de su mascota y nuestros servicios.</Items>
        </ListaItems>
        
        <Items><Subtitle>Compartir Información</Subtitle></Items>
        <Paragraph>No compartimos su información personal con terceros, excepto en la siguiente circunstancia:</Paragraph>
        <ListaItems>
            <Items>Si es requerido por ley o por una orden judicial.</Items>
        </ListaItems>
        
        <Items><Subtitle>Seguridad de los Datos</Subtitle></Items>
        <Paragraph>Tomamos medidas razonables para proteger la infromación personal que recopilamos contra pérdida , robo y uso no autorizado.
            Utilizamos encriptación y otras tecnologías de seguridad para proteger sus datos</Paragraph>
        
        <Items><Subtitle>Derechos del Usuario</Subtitle></Items>
        <Paragraph>Usted tiene derecho a acceder,rectificar o suprimir su información personal. Si desea ejercer alguno de estos derechos,
            por favor contáctenos a través de la información proporcionada al final de esta política.
        </Paragraph>
        
        <Items><Subtitle>Uso de Cookies</Subtitle></Items>
        <Paragraph>Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos
            de texto que se almacenan en su dispositivo.Puede configurar su navegador para rechazar las cookies, pero esto puede afectar la funcionalidad del sitio
        </Paragraph>
        
        <Items><Subtitle>Cambios en la Política de Privacidad </Subtitle></Items>
        <Paragraph>Nos reservamos el derecho de modificar esta politica de privacdad en cualquier momento. Cualquier cambio será notificado publicando la nueva política en nuestro sitio web y actualizando la fecha de "Ultima actualización"</Paragraph>
        
        <Items><Subtitle>Informacion de Contacto</Subtitle></Items>
        <Paragraph>Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad , no dude en contactarnos en: privacidad.veterinaria@coquetos.com</Paragraph>
    </ListaTitulos>
    </>
)
}
export default Politic
