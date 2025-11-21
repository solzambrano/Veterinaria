import Navigation from "../Navigation"
import Footer from "../Footer"
import { Content,Container } from './Layout.style';
import { useEffect } from 'react';
import { useLocation,Outlet } from 'react-router-dom';
const Layout = () => {
    const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    return(
        <Container>
        <Navigation></Navigation>
        <Content>
            <Outlet/>
        </Content>
        <Footer></Footer>
        </Container>
       
    )
}
export default Layout