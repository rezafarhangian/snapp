import "./App.css";
import Header from "./components/header/Header";
import Download from "./components/download-app/Download";
import Services from "./components/services/Services";
import AboutUs from "./components/aboutus/AboutUs";
import Features from "./components/features/Features";
import Navbar from './components/navbar/Navbar'
import Register from './components/register/Register'
import Advantages from './components/advantages/Advantages'
import Footer from './components/footer/Footer'
function App() {





  return (
    <div>
    {/* !=============================Navbar============================== */}
        <Navbar/>

        {/* !=============================Header============================== */}
      <Header />
      <div className="download-container container">
        <Download img="images/download-app/app1.png" />
        <Download img="images/download-app/app2.png" />
        <Download img="images/download-app/app3.png" />
        <Download img="images/download-app/app4.png" />
        <Download img="images/download-app/app5.png" />
      </div>

      <div className="services-wrapper">
        <h2 className="services-title">یک اپلیکیشن، برای تمام نیازها</h2>
        <div className="services-container container">

        {/* !=============================Services============================== */}
          <Services img="images/icons/svg/service1.svg" text="حمل و نقل با اسنپ" name="پیک موتوری"/>
          <Services img="images/icons/svg/service2.svg" text="امکان درخواست انلاین خودرو" name="تاکسی اینترنتی "/>
          <Services img="images/icons/svg/service3.svg" text="باشگاه مشتریان اسنپ!" name="اسنپ! کلاب"/>
          <Services img="images/icons/svg/service4.svg" text="درمان با اسنپ" name="دکتر"/>
          <Services img="images/icons/svg/service5.svg" text="سفارش غذا، نان و شیرینی با اسنپ" name="سفارش انلاین غذا"/>
          <Services img="images/icons/svg/service6.svg" text="تحویل کمتر از 30 دقیقه" name="اسنپ اکسپرس"/>
          <Services img="images/icons/svg/service7.svg" text="تهیه اقلام روزانه با اسنپ" name="سوپرمارکت انلاین"/>
          <Services img="images/icons/svg/service8.svg" text="پرداخت با اسنپ" name="سرویس اعتباری"/>
          <Services img="images/icons/svg/service9.svg" text="خرید انلاین بلیط با اسنپ" name="اسنپ تیکت"/>
          <Services img="images/icons/svg/service10.svg" text="گردشگری با اسنپ" name="رزرو اقامتگاه"/>
          <Services img="images/icons/png/service11.png" text="گردشگری با اسنپ" name="بلیت اتوبوس"/>
          <Services img="images/icons/png/service12.png" text="گردشگری با اسنپ" name="بلیت پرواز خارجی"/>
          <Services img="images/icons/png/service13.png" text="خدمات غیرحضوری بورس و سرمایه گذاری" name="سرمایه گذاری"/>
          <Services img="images/icons/png/service14.png" text="حمل و نقل با اسنپ" name="درخواست وانت"/>
          <Services img="images/icons/png/service15.png" text="گردشگری با اسنپ" name="رزرو هتل"/>
          <Services img="images/icons/png/service16.png" text="حمل و نقل با اسنپ" name="اسباب کشی منزل"/>
          <Services img="images/icons/png/service17.png" text="خرید از فروشگاه های معتبر شهر" name="فروشگاه"/>
        </div>
      </div>

        {/* !=============================Aboute us============================== */}
      <AboutUs />
        

        {/* !=============================Feature============================== */}
      <div className="Features-wrapper container">
        <Features img="images/icons/png/easy.png" title="اسان" text="برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید."/>
        <Features img="images/icons/png/eco.png" title="به صرفه" text="سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید."/>
        <Features img="images/icons/png/fast.png" title="سریع" text="قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست."/>
      </div>
              

              {/* !=============================Register============================== */}
         <Register/>
           
           {/* !=============================Advantages============================== */}
         <div className="advantages-wrapper">
          <Advantages img="images/icons/png/hour.png" title="ساعت کاری دلخواه" text="فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید." />
          <Advantages img="images/icons/png/income.png" title=" درآمد تضمینی + پاداش‌های ماهانه و هفتگی" text="با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید." />
          <Advantages img="images/icons/png/carfix.png" title="کارفیکس" text="باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است." />
          <Advantages img="images/icons/png/benefits.png" title="مزایا و خدمات باشگاه رانندگان" text="در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید." />
         </div>

         {/* !=============================footer============================== */}
       <Footer/>

    </div>
  );
}

export default App;
