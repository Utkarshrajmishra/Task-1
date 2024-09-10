const DetailForm = ({handleChange, data}) => {
  return (
    <section className="w-full h-[402px] px-1 ">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-marineBlue">
          Personal Info
        </h1>
        <p className="text-coolGray mt-2">
          Please provide your name, email, and phone number.
        </p>
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-marineBlue">
              Name
            </label>
            <input
              onChange={handleChange}
              value={data.name}
              type="text"
              placeholder="Utkarsh Raj Mishra"
              name="name"
              id="name"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-marineBlue">
              Email
            </label>
            <input
              onChange={handleChange}
              value={data.email}
              type="email"
              placeholder="utkarsh@gmail.com"
              name="email"
              id="email"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-marineBlue">
              Phone Number
            </label>
            <input
              onChange={handleChange}
              type="number"
              value={data.phone}
              placeholder="7521859385"
              name="phone"
              id="phone"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="occupation" className="text-marineBlue">
              Occupation
            </label>
            <input
              onChange={handleChange}
              type="text"
              value={data.occupation}
              placeholder="Frontend Developer"
              name="occupation"
              id="occupation"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default DetailForm;
