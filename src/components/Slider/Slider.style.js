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
    opacity:0.5;

  }
`;
export const SpanTitle =styled.p`
  position:relative;
  z-index:1;
  bottom:230px;
	position: relative;
	z-index: 1;
	bottom: 250px;
	color: #065106;
  font-weight:600;
  font-size: 18px;
  margin: 0px 10px;
 }
`;
export const TituloImagenSlider =styled.h1`
  position:relative;
  z-index:1;
  bottom:250px;
  margin-bottom:10px;
  color:#065106;
  font-weight:900;
  margin:15px 10px;
 }
`;
