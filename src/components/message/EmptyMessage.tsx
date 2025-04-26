import icon from "/assets/icon.jpeg";

const EmptyMessage = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <div className="flex  gap-x-2 items-center mb-4">
          <img src={icon} className="w-15 " alt="icon" />
          <h2 className="text-2xl font-bold text-gray-800">Hi, I'm tutor</h2>
        </div>
        <p className="text-gray-500">How can i help you today ?</p>
      </div>
    </div>
  );
};

export default EmptyMessage;
