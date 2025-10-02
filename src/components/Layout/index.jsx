import { Outlet } from 'react-router-dom';
import Navigation from "../Navigation"
import Footer from "../Footer"
import { Content } from './Layout.style';
const Layout = () => {
    
    return(
        <>
         <Navigation></Navigation>
        <Content>
            <Outlet/>
        </Content>
        <Footer></Footer>
        </>
       
    )
}
export default Layout