import React from "react";
import { Conversation } from "../../types/types";

interface ConversationProps {
  conversation: Conversation;
  selectedConversation: string | undefined;
  setSelectedConversation: (id: number) => void;
}

const ConversationCard: React.FC<ConversationProps> = ({
  conversation,
  selectedConversation,
  setSelectedConversation,
}) => {
  return (
    <li
      key={conversation.id}
      className={`py-3 px-4 border-b border-gray-50 cursor-pointer rounded-lg flex items-center justify-between ${
        selectedConversation === conversation.id.toString()
          ? "bg-blue-100 text-blue-700 font-semibold"
          : "hover:bg-gray-100"
      }`}
      onClick={() => setSelectedConversation(conversation.id)}
    >
      <div>
        <p className="text-xs text-gray-500">{conversation.lastMessage}</p>
      </div>
      {selectedConversation === conversation.id.toString() && (
        <i className="fa-solid fa-ellipsis text-blue-500"></i>
      )}
    </li>
  );
};

export default ConversationCard;
