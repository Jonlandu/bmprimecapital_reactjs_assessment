import { MessageProps } from "../../types/types";
import EmptyMessage from "./EmptyMessage";
import Input from "./Input";
import Message from "./Message";

const Chat = ({ messages }: { messages: MessageProps[] }) => {
  return (
    <div className="flex-1 bg-white rounded shadow mr-4 h-10/12 p-10">
      <div className="flex flex-col h-full">
        {/* Chat Empty Messages Section */}
        {messages.length === 0 && <EmptyMessage />}

        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <Message key={index} text={message.text} isUser={message.isUser} />
          ))}
        </div>

        {/* Input Section */}
        <div className="relative">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Chat;
