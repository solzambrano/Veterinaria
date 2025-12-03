// import { Paragraph } from "../Contact/contact.styles"
import {ContainerTerms,Title,Paragraph,List,Item} from './terms.style'

const Terms = () =>{
    return(
        <ContainerTerms>
        <Title>Términos del Servicio</Title>
            <Paragraph>Bienvenido a Veterinaria Coquetos.Estos términos y condiciones describen las reglas y regulaciones para el uso del 
                sitio web. Al acceder a este sitio, asumimos que aceptas estos términos y condiciones , a continuación establecidos
            </Paragraph>
        <List>
            <Item>Aceptación de los Términos</Item>
            <Item>Descripción de los servicios</Item>
            <Item>Uso del sitio Web y Obligaciones del Usuarios</Item>
            <Item>Citas y Pagos</Item>
            <Item>Propiedad Intelectual</Item>
            <Item>Limitación de Responsabilidad</Item>

        </List>
        </ContainerTerms>
    )
}
export default Terms