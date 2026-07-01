import styled from "styled-components";
export const SwiperStyled =styled.div`
   width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    cursor:pointer;

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
    width: 200px;
    height:200px;
  }
    `

export const StyledText = styled.p`
position:relative;
z-index:1;
color:var(--color-Green);
font-family:var(--font)

`
export const SpanTitle =styled(StyledText)`
	bottom: 0;
  width:200px;
  font-weight:600;
  font-size: 18px;
  margin: 0px 10px;
 }
`;
export const TituloImagenSlider =styled(StyledText)`
  bottom:250px;
  font-weight:900;
  font-size:2em;
  margin:5px 10px;
 }`;
 export const ImagenSlider =styled.img`
 clip-path: circle(50%);
 `