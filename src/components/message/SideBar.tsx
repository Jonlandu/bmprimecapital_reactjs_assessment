import React, { useState, useEffect } from "react";

interface Conversation {
  id: number;
  selected: boolean;
  date: string;
  lastMessage: string;
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

export const SideBar = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchConversations = async () => {
      const mockData: Conversation[] = [
        {
          id: 1,
          selected: true,
          date: "today",
          lastMessage: "Hey, how are you?",
        },
        {
          id: 2,
          selected: false,
          date: "yesterday",
          lastMessage: "Let's catch up tomorrow.",
        },
        {
          id: 3,
          selected: false,
          date: "yesterday",
          lastMessage: "Can you send me the files?",
        },
      ];
      setConversations(mockData);
    };

    fetchConversations();
  }, []);

  const selectedConversation = conversations.find((conv) => conv.selected);

  const setSelectedConversation = (conversationId: number) => {
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === conversationId
          ? { ...conv, selected: true }
          : { ...conv, selected: false }
      )
    );
    setMessages([]); // Clear messages when switching conversations
  };

  const renderConversations = (date: string) => {
    return conversations
      .filter((conv) => conv.date === date)
      .map((conversation) => (
        <li
          key={conversation.id}
          className={`py-3 px-4 border-b border-gray-50 cursor-pointer rounded-lg flex items-center justify-between ${
            selectedConversation?.id === conversation.id
              ? "bg-blue-100 text-blue-700 font-semibold"
              : "hover:bg-gray-100"
          }`}
          onClick={() => setSelectedConversation(conversation.id)}
        >
          <div>
            <p className="text-xs text-gray-500">{conversation.lastMessage}</p>
          </div>
          {selectedConversation?.id === conversation.id && (
            <i className="fa-solid fa-ellipsis text-blue-500"></i>
          )}
        </li>
      ));
  };

  return (
    <div className="w-90 h-10/12 bg-white flex flex-col shadow-lg rounded-lg">
      <div className="p-4">
        <button className="px-5 py-3 bg-blue-200 rounded-xl text-blue-600 hover:text-white font-medium hover:bg-blue-600 transition">
          <i className="mr-2 fa-solid fa-plus"></i>
          New Chat
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Today</h3>
          <ul className="list-none p-0 m-0">{renderConversations("today")}</ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            Yesterday
          </h3>
          <ul className="list-none p-0 m-0">
            {renderConversations("yesterday")}
          </ul>
        </div>
      </div>
    </div>
  );
};
