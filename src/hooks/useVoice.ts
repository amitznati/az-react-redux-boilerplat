import { useState, useEffect } from "react";

type SpeechRecognitionProps = {
  continuous: boolean;
  grammars: Array<string>;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onaudioend: () => void | null;
  onaudiostart: () => void | null;
  onend: (e: any) => void | null;
  onerror: (e: any) => void | null;
  onnomatch: () => void | null;
  onresult: (e: any) => void | null;
  onsoundend: () => void | null;
  onsoundstart: () => void | null;
  onspeechend: () => void | null;
  onspeechstart: () => void | null;
  onstart: () => void | null;
  stop: () => void | null;
  start: () => void | null;
};

declare global {
  interface Window {
    opr: boolean;
    chrome: boolean;
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const browserName = (function (agent) {
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "MS Edge";
    case agent.indexOf("edg/") > -1:
      return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && Boolean(window.opr):
      return "Opera";
    case agent.indexOf("chrome") > -1 && Boolean(window.chrome):
      return "Chrome";
    case agent.indexOf("trident") > -1:
      return "MS IE";
    case agent.indexOf("firefox") > -1:
      return "Mozilla Firefox";
    case agent.indexOf("safari") > -1:
      return "Safari";
    default:
      return "other";
  }
})((window as Window).navigator.userAgent.toLowerCase());

const useVoice = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speech, setSpeech] = useState<SpeechRecognitionProps | null>(null);
  useEffect(() => {
    try {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const _speech = new SpeechRecognition();
      console.log("create speech");

      if (_speech && browserName === "Safari") {
        _speech.continuous = true;
      }
      console.log(_speech);
      setSpeech(_speech);
    } catch (error) {
      console.error("When initiating recognition..", error);
    }
  }, []);

  const toggleRecognition = () => {
    setIsListening(!isListening);
    if (speech) {
      if (isListening) {
        speech.stop();
      } else {
        speech.start();
      }
    }
  };

  useEffect(() => {
    if (!speech) {
      return;
    }

    speech.onresult = (event) => {
      console.log("in onresult");
      console.log(event);
      if (event.results[event.results.length - 1].isFinal) {
        setText(event.results[event.results.length - 1][0].transcript);
        setIsListening(false);
        speech && speech.stop();
      }
    };

    speech.onerror = (event) => {
      console.error(`Speech recognition error detected: ${event.error}`);
    };
    speech.onaudioend = () => {
      console.log("Audio capturing ended");
      setIsListening(false);
    };
    speech.onaudiostart = () => {
      console.log("onaudiostart");
    };
    speech.onend = (event) => {
      console.log("onend");
      console.log(event);
    };
    speech.onnomatch = () => {
      console.log("onnomatch");
    };
    speech.onsoundstart = () => {
      console.log("onsoundstart");
    };
    speech.onsoundend = () => {
      console.log("onsoundend");
    };
    speech.onspeechstart = () => {
      console.log("onspeechstart");
    };
    speech.onspeechend = () => {
      console.log("onspeechend");
    };
  }, [speech]);

  return {
    text,
    setText,
    isListening,
    toggleRecognition,
    voiceSupported: speech !== null,
  };
};

export { useVoice };
