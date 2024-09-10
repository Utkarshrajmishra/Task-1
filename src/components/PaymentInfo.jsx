const PaymentForm = () => {
  return (
    <section className="w-full h-[402px] px-1">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-marineBlue">
          Payment Details
        </h1>
        <p className="text-coolGray mt-2">
          Please provide card number, expiration date, CV code, and card owner
          name.
        </p>
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="card-number" className="text-marineBlue">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              name="card-number"
              id="card-number"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col gap-1 md:w-1/2">
              <label htmlFor="expiration" className="text-marineBlue">
                Expiration Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                name="expiration"
                id="expiration"
                className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
              />
            </div>
            <div className="flex flex-col gap-1 md:w-1/2">
              <label htmlFor="cv" className="text-marineBlue">
                CV Code
              </label>
              <input
                type="text"
                placeholder="123"
                name="cv"
                id="cv"
                className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="card-owner" className="text-marineBlue">
              Card Owner
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="card-owner"
              id="card-owner"
              className="outline outline-1 outline-coolGray text-marineBlue rounded-md py-2 px-3"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default PaymentForm;
