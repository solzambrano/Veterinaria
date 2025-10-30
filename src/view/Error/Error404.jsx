import { ContainerError,ParagraphAviso,ParagraphNotification,Image,ParagraphRedirect } from "./error.styles";
import {NavLink} from "react-router";

const Error = () =>{
    return(
      <ContainerError>
      <ParagraphAviso>¡Ay no! El perro se ha comido esta página.</ParagraphAviso>
    <Image src="../../../public/images/lost_page.png" alt="perro-se-comio-la-pagina" /> 
      <ParagraphNotification>Lo sentimos parece que nuestro amigo Coqueto se comio la pagina, pero no te preocupes
        todavia puedes volver a la pagina principal y seguir buscando lo que necesitas 
        para tu peludo amigo.
        <ParagraphRedirect> <NavLink href='/'>INICIO</NavLink> </ParagraphRedirect></ParagraphNotification>
      </ContainerError>
    )
}
export default Error