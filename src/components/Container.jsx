import DesktopImage from "../assets/bg-sidebar-desktop.svg";
import MobileImage from "../assets/bg-sidebar-mobile.svg";
import Step from "./Step";
import { Steps } from "../constants/Steps/Steps";
import DetailForm from "./DetailForm";
import AddressForm from "./AddressInfo";
import PaymentForm from "./PaymentInfo";
import { useState } from "react";

// Array of forms to be displayed
const formArray = [<DetailForm />, <AddressForm />, <PaymentForm />];

const Container = () => {
  // State to track the current form index
  const [currentForm, setCurrentForm] = useState(0);

  // Function to handle the "Next" button click
  const handleNext = () => {
    setCurrentForm((prev) => Math.min(prev + 1, formArray.length - 1));
  };

  const handleStep=(index)=>{
    setCurrentForm(index-1)
  }

  // Function to handle the "Finish" button click
  const handleFinish = () => {
    // Add logic to handle the form submission or final step here
    console.log("Form submission or final step logic goes here");
  };

  return (
    <section className="w-full md:w-[780px]  bg-white  md:p-6 h-[540px] rounded-xl flex flex-col md:flex-row relative">
      {/* Steps Section */}
      <div className="absolute md:left-10 md:top-10 md:flex flex-col gap-4 text-white hidden z-10">
        {Steps?.map((item) => (
          <div key={item.id} className="p-2">
            <Step message={item} handleStep={handleStep} currentIndex={currentForm}/>
          </div>
        ))}
      </div>

      {/* Sidebar Image */}
      <div className="hidden md:flex md:w-[35%] h-full">
        <img
          src={DesktopImage}
          alt="Sidebar Image"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full p-4 md:w-[65%] flex flex-col ">
        {/* Display the current form based on the state */}
        <div className="flex-1 ">{formArray[currentForm]}</div>

        {/* Navigation buttons */}
        <div className="flex justify-between  items-center mt-auto pt-4">
          {/* "Previous" button to navigate between forms */}
          <button
            onClick={() => setCurrentForm((prev) => Math.max(prev - 1, 0))}
            disabled={currentForm === 0}
            className={` ${
              currentForm === 0 ? "invisible" : "block"
            } bg-coolGray text-white py-2 px-6 rounded`}
          >
            Previous
          </button>

          {/* "Next" or "Finish" button */}
          <button
            onClick={
              currentForm === formArray.length - 1 ? handleFinish : handleNext
            }
            className="bg-purplishBlue text-white py-2 px-6 rounded"
          >
            {currentForm === formArray.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Container;
