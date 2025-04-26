import React from "react";

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  placeholder = "Message tutor here...",
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="relative flex items-center">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-30 px-4 pr-16 border-[0.8px] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-200"
        aria-label="Message input"
      />
      <div className="absolute right-4 bottom-2 flex items-center gap-x-3">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Attach file"
        >
          <i className="fa-solid fa-paperclip text-2xl"></i>
        </button>
        <button
          type="submit"
          className="text-blue-100 hover:text-blue-500 focus:outline-none"
          aria-label="Send message"
        >
          <i className="fa-solid fa-circle-up text-3xl"></i>
        </button>
      </div>
    </form>
  );
};

export default Input;
