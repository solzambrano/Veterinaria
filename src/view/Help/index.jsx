import { Paragraph,ContainerHelp,TitleHelp,ContainerHelpCategory,ParagraphGreen } from "./help,styles"
import Seeker from '../../components/Seeker'


const Help = () => {
    return(
        <ContainerHelp>
            <TitleHelp>¿Como podemos ayudar a tu <ParagraphGreen>mascota </ParagraphGreen> hoy?</TitleHelp>
        <Paragraph>Encuentra respuestas rápidas sobre nuestros servicios veterinarios, citas , cuidados generales y emergencias.</Paragraph>
        <Seeker></Seeker>
        <ContainerHelpCategory>
            
        </ContainerHelpCategory>
        </ContainerHelp>
    )

}
export default Help