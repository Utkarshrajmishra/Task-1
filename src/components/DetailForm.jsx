const DetailForm = () => {
  return (
    <section className="w-full">
      <div>
        <h1 className="font-bold text-4xl text-marineBlue">Personal Info</h1>
        <p className=" text-coolGray mt-2 ">
          Please provide your name, email and phone number
        </p>
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-marineBlue ">
              Name
            </label>
            <input
              type="text"
              placeholder="Utkarsh Raj Mishra"
              name="name"
              id="name"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-[7px] px-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-marineBlue ">
              Email
            </label>
            <input
              type="email"
              placeholder="utkarsh@gmail.com"
              name="name"
              id="name"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-[7px] px-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-marineBlue ">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="7521859385"
              name="name"
              id="name"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-[7px] px-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-marineBlue ">
                Occupation
            </label>
            <input
              type="text"
              placeholder="Frontend Developer"
              name="name"
              id="name"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-[7px] px-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default DetailForm;
