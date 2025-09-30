import Card from "../../../components/Cards/Card"
import serviceDetail from "../../../../public/data/service-detail"
import { ContainerServices, TitleServices } from "./services.style";
const Services = () =>{
    return(
        <>
        <TitleServices>Conoce nuestros servicios</TitleServices>
        <ContainerServices>    
        {serviceDetail?.map(services=>{
        return <Card key={services.title} 
        item={services} 
        isServices={true}></Card>
        })}
        </ContainerServices>
        </>
    )
}
export default Services