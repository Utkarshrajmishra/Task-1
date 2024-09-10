import DesktopImage from "../assets/bg-sidebar-desktop.svg";
import MobileImage from "../assets/bg-sidebar-mobile.svg";
import Step from "./Step";
import { Steps } from "../constants/Steps/Steps";

const Container = () => {
  return (
    <>
      <section className="w-[90%] md:w-[780px] bg-white p-4 h-[540px] rounded-xl flex items-center justify-start relative">
        {/* Steps positioned absolutely at the top of the image */}
        <div className="absolute  top-5 left-4 w-full p-4 flex flex-col gap-4 text-white z-10">
          {Steps?.map((item) => (
            <div key={item.id} className="p-2">
              <Step message={item} />
            </div>
          ))}
        </div>

        {/* Background images for desktop and mobile */}
        <div className="w-full h-full flex items-start">
          <img
            src={DesktopImage}
            alt="Side Image"
            className="w-auto hidden md:block h-full rounded-lg object-left"
          />
          <img
            src={MobileImage}
            alt="Top Image"
            className="md:hidden block w-full h-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Container;
