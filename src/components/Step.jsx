const Step = ({ message }) => {
  return (
    <div className="flex items-center justify gap-3">
      {/* Updated Circle Outline */}
      <div className="flex cursor-pointer items-center justify-center w-9 h-9 p-2 rounded-full outline outline-1">
        {message.id}
      </div>
      <div>
        <p className="text-light text-sm hidden md:block">Step {message.id}</p>
        <h3 className="font-semibold hidden md:block">{message.title}</h3>
      </div>
    </div>
  );
};

export default Step;
