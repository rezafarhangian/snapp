import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="container">
      <div className="aboutus">
        <div className="aboutus__right">
          <img className="aboutus__img" src="images/background/super-app.jpg" alt="" />
        </div>
        <div className="aboutus__left">
          <h2 className="aboutus__title">سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h2>
          <p className="aboutus__text">
            اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی
            تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ
            راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن
            می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از
            جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و
            فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل،
            پرداخت قبض و خرید شارژ استفاده کنید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
