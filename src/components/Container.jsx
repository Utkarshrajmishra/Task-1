import DesktopImage from "../assets/bg-sidebar-desktop.svg";
import MobileImage from "../assets/bg-sidebar-mobile.svg";
import Step from "./Step";
import { Steps } from "../constants/Steps/Steps";
import DetailForm from "./DetailForm";

const Container = () => {
  return (
    <section className="w-[90%] md:w-[780px] bg-white p-4 h-[540px] rounded-xl flex relative">
      {/* Steps Section */}
      <div className="absolute top-8 left-7 md:flex flex-col gap-4 text-white hidden z-10">
        {Steps?.map((item) => (
          <div key={item.id} className="p-2">
            <Step message={item} />
          </div>
        ))}
      </div>

      {/* Sidebar Image */}
      <div className="hidden md:flex  h-full">
        <img
          src={DesktopImage}
          alt="Sidebar Image"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Detail Form Section */}
      <div className="w-full md:w-1/2 md:ml-10 mt-8">
        <DetailForm />
      </div>
    </section>
  );
};

export default Container;
