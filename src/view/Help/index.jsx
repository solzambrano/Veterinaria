import { Paragraph,ContainerHelp,
    CategorySectionHelp, SubtitleCategory, TitleHelp,ContainerHelpCategory,
    ParagraphGreen } from "./help,style"
import Seeker from '../../components/Seeker';
import FrequentlyQuestions from "./FrequentlyQuestions";
import CardCategory from "../../components/Cards/CardCategory";
import { useState } from "react";
const Help = () => {
    const [category, setCategory] = useState('atencion');
       const selectedQuestion = (slug) => {
        setCategory(slug)
    
       }
    return(
        <ContainerHelp>
            <TitleHelp>¿Como podemos ayudar a tu <ParagraphGreen>mascota </ParagraphGreen> hoy?</TitleHelp>
        <Paragraph>Encuentra respuestas rápidas sobre nuestros servicios veterinarios, citas , cuidados generales y emergencias.</Paragraph>
        <Seeker></Seeker>
        <ContainerHelpCategory>
            <CategorySectionHelp>
                <SubtitleCategory>Explorar por categoría</SubtitleCategory>
                <CardCategory onSelectedCategory={selectedQuestion}></CardCategory>
            </CategorySectionHelp>
                <FrequentlyQuestions category={category}></FrequentlyQuestions>
        </ContainerHelpCategory>
        </ContainerHelp>
    )

}
export default Help