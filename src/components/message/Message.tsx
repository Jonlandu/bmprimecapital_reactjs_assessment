import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "/assets/icon.jpeg";

interface MessageProps {
  text: string;
  isUser: boolean; // true for user message, false for bot message
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  return (
    <div
      className={`flex flex-col ${
        isUser ? "items-end" : "items-start"
      } m-4 p-2`}
    >
      {!isUser && (
        <div className="flex flex-col items-start mb-2">
          <div className="flex items-start">
            <img src={icon} className="w-10 rounded mr-4" alt="icon" />
            <div className="flex flex-col">
              <div className="flex items-center w-fit bg-gray-100 p-2 rounded-xl shadow">
                <i className="fa-solid fa-magnifying-glass-plus text-sm text-gray-300 mr-2"></i>
                <span className="text-gray-700 text-sm">Found 9 results</span>
              </div>
              <div className="flex items-start mt-4">
                <div
                  className="text-gray-700 text-sm"
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isUser && (
        <div
          className={`p-3 rounded-xl max-w-[80%] min-w-[100px] break-words bg-blue-50`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Message;
