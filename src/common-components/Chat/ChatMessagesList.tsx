import { ChatBubble, Loading } from "../index";
import React, { ReactNode, useMemo } from "react";
// import loadingGif from "../../assets/images/loader.gif";

export type messagePropType = {
  text: string | ReactNode;
  isUser?: boolean;
  socketId?: string;
  isAI?: boolean;
};

type ChatMessagesListProps = {
  messages: Array<messagePropType>;
  isThinking?: boolean;
};
const Thinking = ({ isThinking }: { isThinking?: boolean }) =>
  useMemo(() => {
    if (isThinking) {
      return (
        <ChatBubble.Message className="my-2 bg-base-200 flex items-center">
          {/*<img style={{height: 10}} src={loadingGif} alt="loading"/>*/}
          <Loading variant="dots" color="primary" />
        </ChatBubble.Message>
      );
    }
    return "";
  }, [isThinking]);

function ChatMessages({ messages, isThinking }: ChatMessagesListProps) {
  return (
    <div>
      {messages.map((message, index) =>
        message.isAI ? (
          <div
            key={`${message.text}_${index}`}
            className="bg-base-300 text-base p-4 rounded-box my-4"
          >
            {message.text}
          </div>
        ) : (
          <ChatBubble end={message.isUser} key={`${message.text}_${index}`}>
            <ChatBubble.Header>
              Obi-Wan name <ChatBubble.Time>12:45</ChatBubble.Time>
            </ChatBubble.Header>
            <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            <ChatBubble.Message>{message.text}</ChatBubble.Message>
          </ChatBubble>
        ),
      )}
      <Thinking isThinking={isThinking} />
    </div>
  );
}

export default ChatMessages;
