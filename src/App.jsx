import Routes from './routes'
import { GlobalStyles } from './styles/GlobalStyles';
// import useFetchProducts from './hooks/useFetchProducts'

function App() {
  // const {data,getProducts}= useFetchProducts()
  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
    <GlobalStyles/>
    <Routes></Routes>
    </>
  )
}

export default App
