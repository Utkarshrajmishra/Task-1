const Step = ({ message }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Updated Circle Outline */}
      <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full outline outline-1">
        {message.id}
      </div>
      <div>
        <p className="text-light text-sm">Step {message.id}</p>
        <h3 className="font-semibold">{message.title}</h3>
      </div>
    </div>
  );
};

export default Step;
