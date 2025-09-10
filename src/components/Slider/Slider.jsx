import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStyled} from "./Slider.style";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import atencion from '../../assets/images/atencion.png'
import grooming from '../../assets/images/grooming.png'
import historia_medica from '../../assets/images/historia_medica.png'
import urgencia_gatito from '../../assets/images/urgencia_gatito.png'



const Slider = () =>{
    const images= [atencion,historia_medica,urgencia_gatito,grooming];

return(
    <>
    <SwiperStyled>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }} 
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        >
        {images.map((image,index)=>{
          return <SwiperSlide key={index}>
            <img src={image} alt='imagenes de veterinaria'></img>
          </SwiperSlide>
        })}
      </Swiper>
    </SwiperStyled>
    </>
)
}
export default Slider