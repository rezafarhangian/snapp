import "./Register.css";

function Register() {
  return (
    <div className="register-wrapper">

    <div className="container">
      <div className="register">
        <h2 className="register__title">در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h2>
        <p className="register__text">
          بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
          اینترنتی انجام دهید
        </p>
        <button className="register__btn">ثبت نام رانندگان</button>

        <video className="register__video" controls>
          <source src="video/jazb-ranande.mp4" />
        </video>
      </div>
    </div>
    </div>
  );
}

export default Register;
