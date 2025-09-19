import styled from 'styled-components'

export const SwiperStyled =styled.div`
   width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

   .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    position:relative;
    }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 50%;
    }
  
  .swiper-wrapper{
    display:flex;
    flex-direction:row;
    }

  .swiper-slide img {
    display: block;
    width: 100%;
    background: rgba(0,0,0,0.5);
  }
`;
export const SpanTitle =styled.p`
  position:relative;
  z-index:1;
  bottom:230px;
  color:white;
  font-weight:600;
  font-size: 19px;
  margin: 0px 10px;
  background: rgba(10,25,30,0.3);
 }
`;
export const TituloImagenSlider =styled.h1`
  position:relative;
  z-index:1;
  bottom:250px;
  color:white;
  font-weight:900;
  margin:0px 10px;
  background: rgba(10,25,30,0.3);
 }
`;
