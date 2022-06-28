import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <img
            className="header__img"
            src="images/background/back1.jpg"
            alt=""
          />
        </div>

        <div className="header__right">
        <div className="header__wrapper">

          <h1 className="header__title">
            تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپر اپلیکیشن اسنپ!
          </h1>
          <p className="header__des">
            از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
            مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با
            سوپراپلیکیشن اسنپ انجام دهید.
          </p>

          <div className="send-number">
          <div className="send-number__wrapper">
            <input placeholder="09xxxxx6789" className="send-number__input" type="text" />
            <span></span>
          </div>
            <button className="send-number__btn">ارسال لینک</button>
          </div>

          <button className="header__btn">دانلود اپلیکیشن اسنپ</button>
          <button className="header__btn header__btn--active">ورود به وب اپلیکیشن</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
