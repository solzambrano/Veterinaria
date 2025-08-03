import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../view/Home';
import Error404 from '../view/Error/Error404'
import Profile from '../view/Profile'
import Products from '../view/Products'
import Dashboard from '../view/Profile/Dashboard';
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
            path: '/profile',
            element:<Profile/>,
            children:[
                {
                    path:'profile/dashboard',
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