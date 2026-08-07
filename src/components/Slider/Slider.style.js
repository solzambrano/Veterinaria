import styled from 'styled-components'

export const SwiperStyled =styled.div`
margin-top:25px;   
  .swiper {
    padding-top: 50px;
    padding-bottom: 50px;
    position:relative;
  } 
  .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 1250px;
  }
  .swiper-wrapper{
    display:flex;
    flex-direction:row;
    height:850px;
    }
  .swiper-slide img {
    display: block;
    width: 100%;
    filter: brightness(80%);
  }
`;
export const SpanTitle =styled.p`
  position:relative;
  z-index:1;
  bottom:250px;
	color: var(--color-Green-light);
  font-weight:600;
  font-size: 20px;
  margin: 0px 10px;
  text-shadow: 2px 2px 8px rgba(0,0,0,.8);

 }
`;
export const TituloImagenSlider =styled.h1`
  position:relative;
  z-index:1;
  bottom:250px;
  margin-bottom:10px;
  color:var(--color-Green-s);
  font-weight:900;
  margin:15px 10px;
  text-shadow: 2px 2px 8px rgba(0,0,0,.8);
 }
`;
