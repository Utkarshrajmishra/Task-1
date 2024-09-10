import React, { useState, useCallback, useMemo } from "react";
import DesktopImage from "../assets/bg-sidebar-desktop.svg";
import Step from "./Step";
import { Steps } from "../constants/Steps/Steps";
import DetailForm from "./DetailForm";
import AddressForm from "./AddressInfo";
import PaymentForm from "./PaymentInfo";
import { initialData } from "../constants/InitialData/Data";

const Container = () => {
  // State to manage form data
  const [formData, setFormData] = useState(initialData);
  // State to track the current form index
  const [currentForm, setCurrentForm] = useState(0);

  // Memoized form change handler
  const handleFormChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(formData)
  };

  // Memoized function to handle the "Next" button click
  const handleNext = () => {
    setCurrentForm((prev) => Math.min(prev + 1, 2));
  };

  // Memoized function to handle the "Previous" button click
  const handlePrevious = () => {
    setCurrentForm((prev) => Math.max(prev - 1, 0));
  };

  // Memoized function to handle step navigation
  const handleStep = (index) => {
    setCurrentForm(index);
  };

  // Function to handle the final form submission
  const handleFinish =() => {
    console.log("Form submission or final step logic goes here", formData);
    
  };

  // Memoize the current form component to avoid unnecessary renders
  const CurrentForm = useMemo(() => {
    switch (currentForm) {
      case 0:
        return <DetailForm handleChange={handleFormChange} data={formData} />;
      case 1:
        return <AddressForm handleChange={handleFormChange} data={formData} />;
      case 2:
        return <PaymentForm handleChange={handleFormChange} data={formData} />;
      default:
        return null;
    }
  }, [currentForm, formData, handleFormChange]);

  return (
    <section className="w-full md:w-[780px] bg-white md:p-3 h-[540px] rounded-xl flex flex-col md:flex-row relative">
      {/* Steps Section */}
      <div className="absolute md:left-10 md:top-10 md:flex flex-col gap-4 text-white hidden z-10">
        {Steps?.map((item, index) => (
          <div key={item.id} className="p-2">
            <Step
              message={item}
              handleStep={() => handleStep(index)}
              currentIndex={currentForm}
            />
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
      <div className="w-full p-4 md:w-[65%] flex flex-col">
        {/* Display the current form based on the state */}
        <div className="flex-1">{CurrentForm}</div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-10 md:mt-0 pt-4">
          {/* "Previous" button to navigate between forms */}
          <button
            onClick={handlePrevious}
            disabled={currentForm === 0}
            className={`${
              currentForm === 0 ? "invisible" : "block"
            } bg-coolGray text-white py-2 px-6 rounded`}
          >
            Previous
          </button>

          {/* "Next" or "Finish" button */}
          <button
            type="button"
            onClick={currentForm === 2 ? handleFinish : handleNext}
            className="bg-purplishBlue text-white py-2 px-6 rounded"
          >
            {currentForm === 2 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Container);
