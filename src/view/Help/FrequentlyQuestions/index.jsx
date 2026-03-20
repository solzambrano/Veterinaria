import DetailInfo from "../../../components/Detail"
import {Container,Paragraph,Subparagraph} from "./frequently-questions.styles"
import { useState,useEffect } from "react"
const FrequentlyQuestions = ({category}) => {
    const [faqs,setFaqs]=useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (()=>{
            const fetchFaqs = async () => {
            const response= await  fetch("/data/questions.json");
            
            const data= await response.json()
            console.log('respuesta',data);
            setFaqs(data)
            // setIsLoading(true)
            setIsLoading(false)
    
             }
              fetchFaqs();
        },[])
     const filteredFaqs = category
    ? faqs.filter((section) => section.slug === category)
    : faqs; // si no hay slug, muestra todas las secciones
    
      
return (
    <>
    <Container>
      <Paragraph>Preguntas Frecuentes</Paragraph>
      <Subparagraph>Las dudas más comunes de nuestros clientes, resueltas</Subparagraph>

    </Container>

      {filteredFaqs.map((section) => {
        const frequentlyQuestions = section.questions.map(({ question, answer ,items}) => ({
          title: question,
          subtitle: answer,
          items
        }));

        return (
          <div key={section.id}>
            <h2>{section.title}</h2>
            <DetailInfo entry={frequentlyQuestions} isLoading={isLoading} />
          </div>
        );
      })}
    </>
  );
};
export default FrequentlyQuestions