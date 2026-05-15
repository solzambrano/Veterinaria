import DetailInfo from "../../../components/Detail"
import {Container,Paragraph,Subparagraph,Icons,
  ContainerMoreQuestion,SectionTitle} from "./frequently-questions.style"
import { useState,useEffect } from "react"
import More from '../../../assets/icons/more.svg'
const FrequentlyQuestions = ({category}) => {
    const [faqs,setFaqs]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = useState(5);

    useEffect (()=>{
            const fetchFaqs = async () => {
            const response= await  fetch("/data/questions.json");
            const data= await response.json()
            setFaqs(data)
            setIsLoading(false)
    
             }
              fetchFaqs();
        },[])

   useEffect(() => {
        setVisible(5);
    }, [category])

     const filteredFaqs = category
      ? faqs.filter((section) => section.slug === category)
      : faqs; // si no hay slug, muestra todas las secciones
      
      const allQuestions = filteredFaqs.flatMap(section => section.questions);
      const totalQuestions = allQuestions.length;
      const visibilityButton =totalQuestions > visible

      const moreQuestion = (e) => {
          setVisible((prev) => prev + 5);
      }
return (
    <>
    <Container>
      <Paragraph>Preguntas Frecuentes</Paragraph>
      <Subparagraph>Las dudas más comunes de nuestros clientes, resueltas</Subparagraph>
    </Container>
      {filteredFaqs.map((section) => {
        const frequentlyQuestions = section.questions.slice(0, visible).map(({ question, answer ,items}) => ({
          title: question,
          subtitle: answer,
          items
        }));

        return (
            <>
            <SectionTitle key={section.id}>{section.title}</SectionTitle>
            <DetailInfo entry={frequentlyQuestions} isLoading={isLoading} />
            </>
        );
      })}
      {visibilityButton &&
      <ContainerMoreQuestion onClick={moreQuestion}>
        <Icons src={More}></Icons>
        <Subparagraph >Cargar más preguntas</Subparagraph></ContainerMoreQuestion>
      }

    </>
  );
};
export default FrequentlyQuestions