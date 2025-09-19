import { useEffect, useState } from "react";
import { ContainerProducts,Lista, TitleProducts, ContainerList } from './Products.style';
import productsResults from "../../state/prodcuts-result-js";
import Card from "../../components/Cards/Card";
import Footer from '../../components/Footer'
const Products = () => {
   const {products, isLoading, error ,getProducts} = productsResults()

  useEffect(() => {
    getProducts();
  }, []);
 return(
    <>
    <TitleProducts>Tienda de productos</TitleProducts>
    <ContainerList>
      <Lista>Alimento</Lista>
      <Lista>Juguetes</Lista>
      <Lista>Ropa</Lista>
      <Lista>Camas</Lista>
      <Lista>Limpieza</Lista>

    </ContainerList>
    <p>aqyi va isloading</p>
    <ContainerProducts>
    {products?.map((item) => {
      return(  
       <Card key={item.id} item={item}></Card>
      )
    })}
    </ContainerProducts>
    <Footer></Footer>
    </>
 )   
}
export default Products  