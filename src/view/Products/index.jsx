import { useEffect, useState } from "react";
import { ContainerProducts,Imagen, ContainerProduct,ContainerDescription,ContainerImage } from './Products.style';
import productsResults from "../../state/prodcuts-result-js";

const Products = () => {
   const {products, isLoading, error ,getProducts} = productsResults()

  useEffect(() => {
    getProducts();
  }, []);
 return(
    <>
    <h1>Tienda de productos</h1>
    <ul>
      <li>Comida</li>
      <li>Juguetes</li>
      <li>Ropa</li>
      <li>Camas</li>
    </ul>
    <p>aqyi va isloading</p>
    <ContainerProducts>
    {products?.map((item) => {
      return(
      <ContainerProduct  key={item.id}>
         <ContainerImage>
            <Imagen src={item.imagen}></Imagen>
         </ContainerImage>
         <ContainerDescription>
            <h4>{item.nombre}</h4>
            <p>{item.descripcion}</p>
         </ContainerDescription>
      </ContainerProduct>
      )
    })}
    </ContainerProducts>
    </>
 )   
}
export default Products  