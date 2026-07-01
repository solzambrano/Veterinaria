import Card from "../../../components/Cards/Card"
import serviceDetail from "../../../../public/data/service-detail"
import { ContainerServices, TitleServices } from "./specialities.style";
const Specialities = () =>{
    return(
        <>
        <TitleServices>Conoce nuestros servicios</TitleServices>
        <ContainerServices>    
            {serviceDetail?.map(services=>{
                return <Card key={services.title} 
                item={services} 
                isServices></Card>
            })}
   
        </ContainerServices>
        </>
    )
}
export default Specialities