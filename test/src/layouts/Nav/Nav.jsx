import './Nav.css'

function Nav() {
  return (
    <div className='nav-con'>
        <img src="/public/logo.png" alt="" className="logo-image"/>
        <div className='nav-icon'>
          <img src="/public/notification.png" alt="" />
          <img src="/public/send.png" alt="" />
        </div>
    </div>
  );
}

export default Nav;
