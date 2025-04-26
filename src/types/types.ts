export interface MessageProps {
  text: string;
  isUser: boolean;
}
export interface Conversation {
  id: number;
  selected: boolean;
  date: string;
  lastMessage: string;
}

export interface Message {
  sender: "user" | "bot";
  text: string;
}
