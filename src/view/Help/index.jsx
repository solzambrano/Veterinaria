import { Paragraph,ContainerHelp,
    CategorySectionHelp, SubtitleCategory, TitleHelp,ContainerHelpCategory,
    ParagraphGreen } from "./help,styles"
import Seeker from '../../components/Seeker';
import FrequentlyQuestions from "./FrequentlyQuestions";
import CardCategory from "../../components/Cards/CardCategory";


const Help = () => {
    return(
        <ContainerHelp>
            <TitleHelp>¿Como podemos ayudar a tu <ParagraphGreen>mascota </ParagraphGreen> hoy?</TitleHelp>
        <Paragraph>Encuentra respuestas rápidas sobre nuestros servicios veterinarios, citas , cuidados generales y emergencias.</Paragraph>
        <Seeker></Seeker>
        <ContainerHelpCategory>
            <CategorySectionHelp>
                <SubtitleCategory>Explorar por categoría</SubtitleCategory>
                <CardCategory></CardCategory>
                <FrequentlyQuestions></FrequentlyQuestions>
            </CategorySectionHelp>
        </ContainerHelpCategory>
        </ContainerHelp>
    )

}
export default Help