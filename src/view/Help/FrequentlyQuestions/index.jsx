import DetailInfo from "../../../components/Detail"
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
      <p>Preguntas Frequentes</p>
      <p>Las dudas más comunes de nuestros clientes, resueltas</p>

      {filteredFaqs.map((section) => {
        const frequentlyQuestions = section.questions.map(({ question, answer }) => ({
          title: question,
          subtitle: answer
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