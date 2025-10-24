import styled from "styled-components";
import { GlobalStyles } from "../../styles/GlobalStyles";
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
  }`

export const StyledText = styled.p`
position:relative;
z-index:1;
color:var(--color-Green);

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
  margin-bottom:10px;
  font-weight:900;
  font-size:2em;
  margin:15px 10px;
 }`;