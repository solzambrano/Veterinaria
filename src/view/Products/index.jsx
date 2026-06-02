import { useEffect, useState } from "react";
import {Lista, 
  ContainerSectionProducts, TitleProducts, ContainerList} from './Products.style';
import { ListProducts } from "./ListProducts.jsx";
const Products = () => {
  const [filter, setFilter] = useState("Todos");

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
   <ListProducts filter={filter}/>
  
    </ContainerSectionProducts>
 )   
}
export default Products  