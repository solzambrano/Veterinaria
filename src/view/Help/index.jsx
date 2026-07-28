import { Paragraph,ContainerHelp,
    CategorySectionHelp, SubtitleCategory, TitleHelp,ContainerHelpCategory,
    ParagraphGreen,ContainerContact,TitleContact,TextContact } from "./help,style"
import Seeker from '../../components/Seeker';
import FrequentlyQuestions from "./FrequentlyQuestions";
import CardCategory from "./CardCategory";
import { useState } from "react";
import Button from "../../components/Buttons";
const Help = () => {
    const [category, setCategory] = useState('atencion');
       const selectedQuestion = (slug) => {
        setCategory(slug)
    
       }
    return(
        <ContainerHelp>
            <TitleHelp>¿Como podemos ayudar a tu <ParagraphGreen>mascota </ParagraphGreen> hoy?</TitleHelp>
        <Paragraph>Encuentra respuestas rápidas sobre nuestros servicios veterinarios, citas , cuidados generales y emergencias.</Paragraph>
        <Seeker/>
        <ContainerHelpCategory>
            <CategorySectionHelp>
                <SubtitleCategory>Explorar por Categoría</SubtitleCategory>
                <CardCategory onSelectedCategory={selectedQuestion}></CardCategory>
            </CategorySectionHelp>
                <FrequentlyQuestions category={category}></FrequentlyQuestions>
        </ContainerHelpCategory>
              <ContainerContact>
        <TitleContact>No encuentras lo que buscas?</TitleContact>
        <TextContact>Nuestro equipo esta disponible para ayudarte con cualquier duda especifica sobre la salud de tu mascota</TextContact>
        <Button text={'Contáctanos'} variant ={'verde'}></Button>
      </ContainerContact>
        </ContainerHelp>
    )

}
export default Help