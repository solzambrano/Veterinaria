import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStyled,SpanTitle,TituloImagenSlider} from "./Slider.style";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import images from '../../../public/data/slider-data'

// loopAdditionalSlides={2} agregar si se ve una demora en el slide del carrusel
const Slider = () =>{
return(
    <SwiperStyled>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }} 
        autoplay={{
          delay:6000
        }}
        pagination={false}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        >
        {images.map((element,index)=>{
          return <SwiperSlide key={index}>
            <img src={element.image} alt='imagenes de veterinaria'></img>
            <TituloImagenSlider>{element.title}</TituloImagenSlider>
            <SpanTitle> {element.description}</SpanTitle>
          </SwiperSlide>
        })}
      </Swiper>
    </SwiperStyled>
)
}
export default Slider