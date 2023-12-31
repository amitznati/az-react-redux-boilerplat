import {Card, Divider} from "../index";
import ChatInputField from "./chatInputField";
import {InputProps} from "../Input";
import ChatMessagesList from "./ChatMessagesList";
import {messagePropType} from "./index";

import './chat.css';
import {useEffect, useRef} from "react";

export type chatPropsType = {
    messages: Array<messagePropType>;
    title?: string;
    onSendClick: () => void,
    inputProps?: InputProps,
    inputText: string
    setInputText: (v: string) => void
    isThinking?: boolean,
    disabled?: boolean
}

function Chat({messages, title, onSendClick, setInputText, inputText, disabled, isThinking = false}: chatPropsType) {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            (ref.current as HTMLElement).scrollTo(0, (ref.current as HTMLElement).scrollHeight);
        }
    }, [messages]);
    return (
        <Card className="h-full w-full relative">
            {title && <Card.Title className="p-4" tag="h2">{title}</Card.Title>}
            <Card.Body ref={ref} className="overflow-auto">
                <ChatMessagesList messages={messages} isThinking={isThinking} />
            </Card.Body>
            <Card.Actions className=" p-4 w-full">
                <Divider className="my-2 w-full"/>
                <ChatInputField
                    disabled={disabled}
                    setInputText={setInputText}
                    inputText={inputText}
                    onSendClick={onSendClick}
                />
            </Card.Actions>
        </Card>
    )
}

export default Chat;