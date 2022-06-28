import { TbBrandTelegram, TbBrandTwitter, TbBrandInstagram, TbBrandLinkedin, TbBrandYoutube } from "react-icons/tb";
import Media from '../media/Media'
import "./Footer.css"

function Footer() {
  return (
    <div className="container">

    <div className="footer">
       <ul className="footer-list">
        <li className="footer__item"><a className="footer__link" href="#">فرصت های شغلی</a></li>
        <li className="footer__item"><a className="footer__link" href="#">بلاگ</a></li>
        <li className="footer__item"><a className="footer__link" href="#">باشگاه رانندگان</a></li>
        <li className="footer__item"><a className="footer__link" href="#">ثبت نام راننده اسنپ</a></li>
        <li className="footer__item"><a className="footer__link" href="#">پنل سازمانی</a></li>
        <li className="footer__item"><a className="footer__link" href="#">درباره ما</a></li>
        <li className="footer__item"><a className="footer__link" href="#">تماس با ما</a></li>
       </ul>

       <div className="media-wrapper">
         <Media svg={<TbBrandTelegram className="icons"/>}/>
         <Media svg={<TbBrandTwitter className="icons"/>}/>
         <Media svg={<TbBrandInstagram className="icons"/>}/>
         <Media svg={<TbBrandLinkedin className="icons"/>}/>
         <Media svg={<TbBrandYoutube className="icons"/>}/>
         </div>

    </div>
    </div>
  )
}

export default Footer