import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStyled,SpanTitle,TituloImagenSlider} from "./Slider.style";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import atencion from '../../assets/images/atencion.png'
import grooming from '../../assets/images/grooming.png'
import historia_medica from '../../assets/images/historia_medica.png'
import urgencia_gatito from '../../assets/images/urgencia_gatito.png'



const Slider = () =>{
    const images= [
      { imagen:atencion,
        titulo:'El cuidado de tu mascota es nuestra prioridad',
        descripcion:'Bienvenidos a veterinaria Coquetos,gracias a nuestros profesionales bien preparados somos la primer veterinaria con una guardia médica, las 24 hs atendemos todo tipo de urgencia'
      },
      { imagen:historia_medica,
        titulo:'El historial medico de tu mascota siempre a mano',
        descripcion:'Al crearte una cuenta en nuestra página vas a poder ver y realizar turnos , acceder a todo el historial de tu mascotas, saber cuando son sus proximas vacunas, etc.'
      },
      { imagen:urgencia_gatito,
        titulo:'Podés agendar citas',
        descripcion:'Nuestros equipo esta dedicado a asegurar el bienestar de tu mascota, podes agendar citas con nosotros desde tu perfil, y tener las rutinas de control de tu mascota bien organizadas'
      },
      { imagen:grooming,
        titulo:'Grooming completo para tu mascota',
        descripcion:'Tambien contamos con servicio de baño, corte de cabello y uñas, lo que tu mascota necesite lo tenemos'
    }];

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
        autoplay={{
          delay:4000
        }}
        pagination={false}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        >
        {images.map((image,index)=>{
          return <SwiperSlide key={index}>
            <img src={image.imagen} alt='imagenes de veterinaria'></img>
            <TituloImagenSlider>{image.titulo}</TituloImagenSlider>
            <SpanTitle> {image.descripcion}</SpanTitle>
          </SwiperSlide>
        })}
      </Swiper>
    </SwiperStyled>
    </>
)
}
export default Slider