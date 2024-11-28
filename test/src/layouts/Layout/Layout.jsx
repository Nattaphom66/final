import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Nav from '../nav/nav';
import './Layout.css';

function Layout({ tab, setTab }) {
  const location = useLocation();  // ใช้ hook เพื่อตรวจสอบเส้นทางปัจจุบัน

  // เช็คว่าเส้นทางปัจจุบันคือหน้า Login หรือไม่
  const isLoginPage = location.pathname === '/Login';

  return (
    <div>
      {/* แสดง Nav และ Footer เฉพาะเมื่อไม่ใช่หน้า Login */}
      {!isLoginPage && <Nav />}
      <Outlet />
      {!isLoginPage && <Footer tab={tab} setTab={setTab} />}
    </div>
  );
}

export default Layout;
