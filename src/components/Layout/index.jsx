import Navigation from "../Navigation"
import Footer from "../Footer"
import { Content } from './Layout.style';
import { useEffect } from 'react';
import { useLocation,Outlet } from 'react-router-dom';
const Layout = () => {
    const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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