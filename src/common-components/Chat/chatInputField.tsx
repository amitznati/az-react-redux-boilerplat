import React, { useEffect, useMemo } from "react";
import { useVoice } from "../../hooks/useVoice";
import { InputField } from "../index";
import { IoAttach, IoMic, IoMicCircleOutline, IoSend } from "react-icons/io5";

const ChatInputField = ({
  inputText,
  setInputText,
  onSendClick,
  disabled,
}: {
  inputText: string;
  setInputText: (v: string) => void;
  onSendClick: () => void;
  disabled?: boolean;
}) => {
  const { toggleRecognition, voiceSupported, text, isListening, setText } =
    useVoice();
  useEffect(() => {
    console.log("speech found: ", { text, voiceSupported });
    if (text && voiceSupported) {
      setInputText(text);
      setText("");
    }
  }, [text, voiceSupported, setText, setInputText]);
  return useMemo(() => {
    return (
      <InputField
        disabled={disabled}
        inputProps={{
          placeholder: "type here...",
          value: inputText,
          onChange: (e) => setInputText(e.target.value),
          onKeyUp: ({ key }) => {
            if (key === "Enter") {
              setInputText("");
              onSendClick();
            }
          },
        }}
        startIcons={[<IoAttach size={24} />]}
        endIcons={[
          isListening ? (
            <IoMicCircleOutline
              className="text-error"
              size={24}
              onClick={toggleRecognition}
            />
          ) : (
            <IoMic
              size={24}
              className="text-secondary"
              onClick={toggleRecognition}
            />
          ),
          <IoSend
            className="ml-4 text-primary"
            size={24}
            onClick={onSendClick}
          />,
        ]}
      />
    );
  }, [inputText, isListening, disabled]);
};

export default ChatInputField;
