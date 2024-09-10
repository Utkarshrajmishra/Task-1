import DesktopImage from "../assets/bg-sidebar-desktop.svg";
import MobileImage from "../assets/bg-sidebar-mobile.svg";
import Step from "./Step";
import { Steps } from "../constants/Steps/Steps";
import DetailForm from "./DetailForm";
import AddressForm from "./AddressInfo";

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
      <div className="hidden md:flex w-[35%]  h-full">
        <img
          src={DesktopImage}
          alt="Sidebar Image"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Detail Form Section */}
      <div className=" p-8 w-[65%] flex flex-col gap-3 h-full">
        <div className="flex-1">
          {/* <DetailForm /> */}
          <AddressForm/>
        </div>
        <div className="mt-auto flex justify-end p-4">
          <button className="bg-purplishBlue text-white py-2 px-6  rounded">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Container;
