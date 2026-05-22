import { useEffect, useState } from "react";
import Loader from "../../components/Spinner/index.jsx";
import { ContainerProducts,Lista, 
  ContainerSectionProducts, TitleProducts, ContainerList} from './Products.style';
import productsResults from "../../state/prodcuts-result-js.js";
import Card from "../../components/Cards/Card";

const Products = () => {
   const {products, isLoading, error ,getProducts} = productsResults()
  const [filter, setFilter] = useState("Todos");
   
  useEffect(() => {  
    getProducts();
    console.log('primer use',products);
  }, []);

  const filterProducts = 
    filter === "Todos" 
    ? products
    : products.filter(product => product.slug === filter)

    const handleFilter = (value) => {
    setFilter(value);
  };

 return(
    <ContainerSectionProducts>
    <TitleProducts>Tienda de productos</TitleProducts>
    <ContainerList >
      <Lista onClick={()=>handleFilter("Alimento")}>Alimento</Lista>
      <Lista  onClick={()=>handleFilter("Juguetes")}>Juguetes</Lista>
      <Lista onClick={()=>handleFilter("Ropa")}>Ropa</Lista>
      <Lista  onClick={()=>handleFilter("Camas")}>Camas</Lista>
      <Lista  onClick={()=>handleFilter("Limpieza")}>Limpieza</Lista>
      <Lista  onClick={()=>handleFilter("Accesorios")}>Accesorios</Lista>
      <Lista  onClick={()=>handleFilter("Todos")}>Todos</Lista>

    </ContainerList>
    {isLoading ?
         (<Loader/>)
         :
         (
         <ContainerProducts>
            {products?.map((item) => {
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