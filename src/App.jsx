import Routes from './routes'
import { useEffect, useState } from "react";
import { GlobalStyles } from './styles/GlobalStyles';
// import useFetchProducts from './hooks/useFetchProducts'

function App() {
  // const {data,getProducts}= useFetchProducts()
  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
    <GlobalStyles></GlobalStyles>
    <Routes></Routes>
    </>
  )
}

export default App
