import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../view/Home';
import Error404 from '../view/Error/Error404'
import Profile from '../view/Profile'
import Products from '../view/Products'
import Dashboard from '../view/Profile/Dashboard';
import Login from '../view/Login';
import CreateAcount from '../view/Login/CreateAcount'

const Routes = () => {

    // aqui defino las rutas con path y el componente
    const router = createBrowserRouter([
       { 
            path :'/',
            element:<Home/>,
            errorElement:<Error404/>
        },
        {
            path:'/products',
            element:<Products/>,
        },
        {
            path:'/ingresa',
            element:<Login/>
        },
        {
            path:'/register',
            element:<CreateAcount/>
        },
        {
            path: '/profile',
            element:<Profile/>,
            children:[
                {
                    path:'dashboard',
                    element:<Dashboard/>
                }
            ]
        }
])
return (
    <>
    <RouterProvider router={router} />
    </>
)
}
export default Routes