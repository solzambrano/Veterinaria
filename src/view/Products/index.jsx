import { useEffect, useState } from "react";
import { ContainerProducts,ContainerProduct,ContainerDescription,ContainerImage } from './Products.style';
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
    <p>aqyui va isloading</p>
    <ContainerProducts>
    {products?.map((item) => {
      return(
      <ContainerProduct  key={item.id}>
         <ContainerImage>
            <img src={item.image}/>
         </ContainerImage>
         <ContainerDescription>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
         </ContainerDescription>
      </ContainerProduct>
      )
    })}
    </ContainerProducts>
    </>
 )   
}
export default Products  