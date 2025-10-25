import { ContainerPrincipal,ContainerImage,Title,Subtitle,ContainerBodyText,Paragraph,ListaTitulos,ListaItems,Items } from "./politic.styled"

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
    <ContainerImage> <img src="../../public/images/seguridad.png"/></ContainerImage>
    </ContainerPrincipal>
    <ListaTitulos>
        <Items>Recopilación de Información</Items>
        <Items>Uso de la Información</Items>
        <Items>Compartir Información</Items>
        <Items>Seguridad de los Datos</Items>
        <Items>Derechos del Usuario</Items>
        <Items>Uso de Cookies</Items>
        <Items>Cambios en la Política de Privacidad</Items>
        <Items>Informacion de Contacto</Items>
    </ListaTitulos>
    </>
)
}
export default Politic
