import {ContainerTerms,Title,Paragraph,ListOrdered,Subparagraph} from './terms.style'
import DetailInfo from '../../components/Detail';
import { useState,useEffect } from 'react';

const Terms = () =>{
    const [terms, setTerms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
        useEffect (()=>{
         const fetchTerms = async () => {
       const response= await  fetch("/data/terms.json");
        const data= await response.json()
        setTerms(data)
        // setIsLoading(true)
        setIsLoading(false)

         }
          fetchTerms();
    },[])
    return(
        <ContainerTerms>
        <Title>Términos del Servicio</Title>
            <Subparagraph>Ultima actualizacion : 24 de Noviembre de 2025</Subparagraph>
            <Paragraph>Bienvenido a Veterinaria Coquetos.Estos términos y condiciones describen las reglas y regulaciones para el uso del 
                sitio web. Al acceder a este sitio, asumimos que aceptas estos términos y condiciones , a continuación establecidos.
            </Paragraph>
        <ListOrdered>
            <DetailInfo 
                entry={terms}
                isLoading={isLoading}
            ></DetailInfo>
        </ListOrdered>
        </ContainerTerms>
    )
}
export default Terms