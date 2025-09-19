import  Navigation  from '../../components/Navigation';
import Slider from '../../components/Slider/Slider';
import Footer from '../../components/Footer';
import Services from './Services';
import { ContainerPages } from './home.style';
const Home = () => {
    console.log('primero');
    
    return (
    <>
    <Navigation></Navigation>
    <ContainerPages>
    <Slider></Slider>
    <Services></Services>
    <Footer></Footer>
    </ContainerPages>

    </>
    )
}
export default Home