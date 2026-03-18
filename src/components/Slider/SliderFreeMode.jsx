import { Swiper,SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import commentsResult from '../../state/comments-result.js';
import { TituloImagenSlider,SpanTitle,SwiperStyled,ImagenSlider } from "./freeMode.style";

const SliderFreeMode = () =>{
    
    const {comments, isLoading,error, getComments} = commentsResult()

    useEffect(() => {
        getComments();
      }, []);
    return(
        <SwiperStyled>
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
            clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {comments.map((comment,index)=>{
            return <SwiperSlide key={index}>
                <ImagenSlider src={comment.image} alt='imagenes de veterinaria'></ImagenSlider>
                <TituloImagenSlider>{comment.title}</TituloImagenSlider>
                <SpanTitle> {comment.description}</SpanTitle>
            </SwiperSlide>
        })}
      </Swiper>
      </SwiperStyled>
    )
}
export default SliderFreeMode;