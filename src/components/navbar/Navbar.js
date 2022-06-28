import "./Navbar.css"
function Navbar() {
  return (
    <div className="menu-stiky">

     <div className="container">
    <div className="wrapper">
        <nav className="navbar">
              <div className="menu"></div>
              <img className="nav__logo" src="images/title-site/snappTitle.svg" alt="" />
            <ul className="nav__list">
                <li className="nav__item"><a className="nav__link" href="#">فرصت های شغلی</a></li>
                <li className="nav__item"><a className="nav__link" href="#">بلاگ</a></li>
                <li className="nav__item"><a className="nav__link" href="#">باشگاه رانندگان</a></li>
                <li className="nav__item"><a className="nav__link" href="#">ثبت نام راننده اسنپ</a></li>
                <li className="nav__item"><a className="nav__link" href="#">پنل سازمانی</a></li>
                <li className="nav__item"><a className="nav__link" href="#">درباره ما</a></li>
                <li className="nav__item"><a className="nav__link" href="#">تماس با ما</a></li>
            </ul>
        </nav>
    </div>
     </div>
    </div>
  )
}

export default Navbar