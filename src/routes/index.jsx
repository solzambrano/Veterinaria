import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../view/Home'
const Routes = () => {

    // aqui defino las rutas con path y el componente
    const router = createBrowserRouter([
       { path :'/',
        element:<Home/>
}])
return (
    <>
    <RouterProvider router={router} />
    </>
)
}
export default Routes