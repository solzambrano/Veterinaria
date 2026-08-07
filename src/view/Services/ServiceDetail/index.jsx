import { useParams } from 'react-router-dom';
import serviceDetail from "../../../../public/data/service-detail"
import Header from './HeaderServices'
// import Footer from './ServiceFooter'

const ServiceDetail = () =>{
const { slug } = useParams();
const service =serviceDetail.find(service=>service.slug === slug)
    console.log('service',slug)
return(<>

<Header serviceData={service.header}/>
</>)

}
export default ServiceDetail