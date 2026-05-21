import { useEffect, useState } from "react";
import Loader from "../../components/Spinner/index.jsx";
import { ContainerProducts,Lista, 
  ContainerSectionProducts, TitleProducts, ContainerList} from './Products.style';
import productsResults from "../../state/prodcuts-result-js.js";
import Card from "../../components/Cards/Card";

const Products = () => {
   const {products, isLoading, error ,getProducts} = productsResults()
    const[newProducts,setNewProducts]=useState([])
   useEffect(() => {
    getProducts();
  }, []);
  useEffect(()=>{
    setNewProducts(products)
  },[])
  const filterProducts = (e) =>{
    e.target.innerText == "Todos" ?
      setNewProducts(products)
    : 
      setNewProducts(products.filter(product => product.slug == e.target.innerText))
  }

 return(
    <ContainerSectionProducts>
    <TitleProducts>Tienda de productos</TitleProducts>
    <ContainerList >
      <Lista onClick={filterProducts}>Alimento</Lista>
      <Lista  onClick={filterProducts}>Juguetes</Lista>
      <Lista onClick={filterProducts}>Ropa</Lista>
      <Lista  onClick={filterProducts}>Camas</Lista>
      <Lista  onClick={filterProducts}>Limpieza</Lista>
      <Lista  onClick={filterProducts}>Accesorios</Lista>
      <Lista  onClick={filterProducts}>Todos</Lista>

    </ContainerList>
    {isLoading ?
         (<Loader/>)
         :
         (
         <ContainerProducts>
            {newProducts?.map((item) => {
              return(  <Card key={item.id} item={item}></Card>)
              })
            }
          </ContainerProducts>
        )
    }
    </ContainerSectionProducts>
 )   
}
export default Products  