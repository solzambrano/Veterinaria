import {ContainerTerms,Title,Paragraph,ListOrdered,ListUnordered,Item,Subparagraph} from './terms.style'
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
            {/* <Item> 
                <Detail>
                    <Sumary>Aceptación de los Términos   <Image src={Arrow}></Image></Sumary>
                        <Subparagraph>Al acceder y utilizar este sitio web, el usuario 
                            declara haber leído, comprendido y aceptado los presentes términos. 
                            Si no está de acuerdo con alguna de las condiciones 
                            aquí establecidas, deberá abstenerse de utilizar el sitio y los servicios ofrecidos.
                        </Subparagraph>
                </Detail>
            </Item>
            <Item>
                <Detail>
                    <Sumary> Descripción de los servicios  <Image src={Arrow}></Image></Sumary>
                        <Subparagraph>El usuario se compromete a utilizar este sitio web únicamente para fines lícitos y de manera adecuada.</Subparagraph>
                            <ListUnordered> <Subparagraph> Está prohibido:  </Subparagraph> 
                            <Item> Realizar acciones que puedan dañar, alterar o afectar el funcionamiento del sitio. </Item>
                            <Item>Publicar información falsa, ofensiva o que infrinja derechos de terceros.</Item>
                            <Item>Intentar acceder sin autorización a sistemas, datos o información restringida.</Item> 
                            <Subparagraph> La veterinaria se reserva el derecho de restringir o suspender el acceso a usuarios que incumplan estas condiciones.</Subparagraph>
                </ListUnordered>
                </Detail>
            </Item>
            <Item>
                <Detail>
                    <Sumary> Uso del sitio Web y Obligaciones del Usuarios  <Image src={Arrow}></Image></Sumary>
                    <Subparagraph>El acceso y uso del sitio son exclusivos para la gestión de turnos y servicios relacionados con la atención veterinaria.Cualquier uso indebido podrá dar lugar a la 
                        suspensión temporal o definitiva del acceso al sitio, sin perjuicio de otras acciones legales que correspondan.
                    </Subparagraph>
                </Detail>
            </Item>
            <Item>
                <Detail>
                    <Sumary> Citas y Pagos  <Image src={Arrow}></Image></Sumary>
                    <Subparagraph>El sistema de turnos online facilita la solicitud de citas, pero la confirmación final puede estar sujeta a disponibilidad.
                    El usuario es responsable de proporcionar información correcta y acudir en el horario acordado.
                    Los cambios o cancelaciones deben realizarse con anticipación razonable.
                    En casos de urgencia, se recomienda comunicarse directamente por los medios indicados en el sitio.</Subparagraph>
                </Detail>
            </Item>
            <Item>
                <Detail>
                    <Sumary> Propiedad Intelectual <Image src={Arrow}></Image></Sumary>
                    <Subparagraph>Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, gráficos y diseños, son propiedad exclusiva de la veterinaria o de sus respectivos titulares y están protegidos por leyes de propiedad intelectual.
                    Queda prohibida la copia, reproducción, distribución o modificación de cualquier contenido sin autorización previa y por escrito.</Subparagraph>
                </Detail>
            </Item>
            <Item>
                <Detail>
                    <Sumary>Limitación de Responsabilidad <Image src={Arrow}></Image></Sumary>
                    <Subparagraph>La veterinaria no se hace responsable por:
                    *Daños derivados del uso o la imposibilidad de uso del sitio web.
                    *Errores u omisiones en la información publicada.
                    *Decisiones tomadas por el usuario basadas únicamente en el contenido del sitio sin consultar a un profesional.
                    *Los servicios veterinarios serán realizados por profesionales habilitados, pero los resultados pueden variar según cada caso clínico del animal.</Subparagraph>
                </Detail>
            </Item> */}

        </ListOrdered>
        </ContainerTerms>
    )
}
export default Terms