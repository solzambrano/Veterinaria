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
import Grooming from '../view/Services/Grooming';
import ClinicalLaboratory from '../view/Services/ClinicalLaboratory';
import GeneralConsultation from '../view/Services/GeneralConsultation';
import Vacunation from '../view/Services/Vacunation';
import Cirugy from '../view/Services/Cirugy';




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
                 },
                {
                    path:'services/urgency',
                    element:<Urgency/>
                },
                 {
                    path:'services/clinical_laboratory',
                    element:<ClinicalLaboratory/>
                },
                 {
                    path:'services/general_consultation',
                    element:<GeneralConsultation/>
                },
                 {
                    path:'services/grooming',
                    element:<Grooming/>
                },
                 {
                    path:'services/cirugy',
                    element:<Cirugy/>
                },
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