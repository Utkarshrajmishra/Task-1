const AddressForm = () => {
  return (
    <section className="w-full h-[402px] px-1">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-marineBlue">
          Address Info
        </h1>
        <p className="text-coolGray mt-2">
          Please provide your city, state, pin code, and country.
        </p>
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-marineBlue">
              City
            </label>
            <input
              type="text"
              placeholder="Greater Noida"
              name="city"
              id="city"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="state" className="text-marineBlue">
                State
              </label>
              <input
                type="text"
                placeholder="Uttar Pradesh"
                name="state"
                id="state"
                className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
              />
            </div>
            <div className="flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="pincode" className="text-marineBlue">
                Pincode
              </label>
              <input
                type="number"
                placeholder="858985"
                name="pincode"
                id="pincode"
                className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="country" className="text-marineBlue">
              Country
            </label>
            <input
              type="text"
              placeholder="India"
              name="country"
              id="country"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddressForm;
