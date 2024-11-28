
import { Outlet } from 'react-router';
import Footer from '../footer/footer';
import Nav from '../nav/nav';
import Post from '../Post/Post';
import Story from '../story/story';
import './Layout.css'

function Layout({ tab, setTab }) {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer tab={tab} setTab={setTab}/>
    </div>
  );
}

export default Layout;
