const DetailForm = () => {
  return (
    <section className="w-full">
      <div>
        <h1 className="font-bold text-4xl text-marineBlue">Personal Info</h1>
        <p className=" text-coolGray mt-2 text-[0.9rem]">
          Please provide your name, email and phone number
        </p>
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-marineBlue text-[0.9rem]">
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
          <div className="flex flex-col">
            <label htmlFor="email" className="text-marineBlue text-[0.9rem]">
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
          <div className="flex flex-col">
            <label htmlFor="name" className="text-marineBlue text-[0.9rem]">
              Name
            </label>
            <input
              type="number"
              placeholder="7521859385"
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
