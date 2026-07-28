import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../view/Home';
import Layout from '../components/Layout';
import Error404 from '../view/Error/Error404'
import Profile from '../view/Profile'
import Products from '../view/Products'
import Dashboard from '../view/Profile/Dashboard';
import Login from '../view/Login';
import CreateAcount from '../view/Login/CreateAcount';
import Politic from '../view/Politic';
import Contact from '../view/Contact';
import Terms from '../view/Terms';
import Help from '../view/Help';
import Services from '../view/Services';
import Urgency from '../view/Services/Urgency';

const Routes = () => {

    // aqui defino las rutas con path y el componente
    const router = createBrowserRouter([
       { 
            path :'/',
            element: <Layout/>,
            errorElement:<Error404/>,
            children:[
                {
                    index:true,
                    element:<Home/>,

                },
                {
                    path:'products',
                    element:<Products/>,
                },
                {
                    path:'politica-de-privacidad',
                    element:<Politic/>
                },
                {
                    path:'contact-us',
                    element:<Contact/>
                },
                {
                    path:'terms-services',
                    element: <Terms/>
                },
                {
                    path:'help-support',
                    element:<Help/>
                },
                 {
                    path:'services',
                    element:<Services/>,
                    children:[
                        {
                            path:'urgency',
                            element:<Urgency/>
                        }
                    ]
                }
            ]
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
    <RouterProvider router={router} />
)
}
export default Routes