import DesktopImage from "../assets/bg-sidebar-desktop.svg";
import MobileImage from "../assets/bg-sidebar-mobile.svg";
import { Steps } from "../constants/Steps/Steps";
const Container = () => {
  return (
    <>
      <section className="w-[90%] md:w-[780px] bg-white p-4 h-[540px] rounded-xl flex items-center justify-start">
        <div className="w-full h-full relative flex items-start">
          <img
            src={DesktopImage}
            alt="Side Image"
            className="w-auto hidden md:block h-full rounded-lg object-left"
          />

          <img src={MobileImage} alt="Top Image" className="md:hidden block" />
        </div>
      </section>
    </>
  );
};

export default Container;
