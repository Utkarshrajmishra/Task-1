const AddressForm = () => {
  return (
    <section className="w-full">
      <div>
        <h1 className="font-bold text-4xl text-marineBlue">Address Info</h1>
        <p className=" text-coolGray mt-2 ">
          Please provide your city, state, pin code and country.
        </p>
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-marineBlue ">
              City
            </label>
            <input
              type="text"
              placeholder="Greater Noida"
              name="city"
              id="city"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-[7px] px-2"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="state" className="text-marineBlue ">
                State
              </label>
              <input
                type="text"
                placeholder="Uttar Pradesh"
                name="state"
                id="state"
                className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-[7px] px-2"
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="name" className="text-marineBlue ">
                Pincode
              </label>
              <input
                type="number"
                placeholder="858985"
                name="name"
                id="name"
                className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-[7px] px-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="country" className="text-marineBlue ">
              Country
            </label>
            <input
              type="text"
              placeholder="India"
              name="country"
              id="country"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-[7px] px-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default AddressForm;
