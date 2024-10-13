import useSpeechToText from "react-hook-speech-to-text";
import {
  ExpandIcon,
  MirrorIcon,
  PlayIcon,
  ReloadIcon,
  StopIcon,
} from "../assets/Icons";
import { useCameraContext } from "../context/CameraContextProvider";
import "../style/control.css";
import { useEffect, useState } from "react";

const KEYWORDS_SS = ["ss"];
const KEYWORDS_STOP = ["stop"];
const KEYWORDS_MIRROR = ["mirror"];
const KEYWORDS_AGAIN = ["again"];
const KEYWORDS_EXPAND = ["expand"];

const CameraControl = () => {
  const {
    isExpand,
    setExpand,
    webcamRef,
    setImageURL,
    imageURL,
    setMirror,
    isMirror,
    onSetConfigLS,
  } = useCameraContext();

  const [textSpeech, setTextSpeech] = useState("");

  const {
    error,
    interimResult = "",
    isRecording,
    // results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
    speechRecognitionProperties: {
      lang: "en-US",
      interimResults: true, // Allows for displaying real-time speech results
    },
  });

  /**
   *
   * @param {string[]} arr
   * @param {string} text
   * @returns
   */
  const containsArrayText = (arr, text) => {
    return arr.some((word) => new RegExp(`\\b${word}\\b`, "i").test(text));
  };

  const onSetMirror = () => {
    setMirror(!isMirror);
    onSetConfigLS("mirror", !isMirror);
  };

  const onSetExpand = () => {
    setExpand(!isExpand);
    onSetConfigLS("expand", !isExpand);
  };

  useEffect(() => {
    setTextSpeech(interimResult?.trim());
  }, [interimResult]);

  useEffect(() => {
    if (Object.keys(webcamRef.current || {})?.length > 0) {
      if (containsArrayText(KEYWORDS_SS, textSpeech)) {
        const imageSrc = webcamRef?.current?.getScreenshot();
        setImageURL(imageSrc);
      }

      if (containsArrayText(KEYWORDS_MIRROR, textSpeech)) {
        onSetMirror();
      }

      if (containsArrayText(KEYWORDS_EXPAND, textSpeech)) {
        onSetExpand();
      }
    }

    if (containsArrayText(KEYWORDS_AGAIN, textSpeech)) {
      setImageURL("");
    }

    if (containsArrayText(KEYWORDS_STOP, textSpeech)) {
      stopSpeechToText();
    }
  }, [textSpeech, webcamRef, isRecording]);

  return (
    <div className="wrapper-controls">
      <div className="wrapper-icons">
        <div
          onClick={() => {
            onSetExpand();
          }}
          className="control-icon"
        >
          <ExpandIcon />
        </div>

        <div onClick={() => onSetMirror} className="control-icon">
          <MirrorIcon />
        </div>

        {imageURL && (
          <div onClick={() => setImageURL("")} className="control-icon">
            <ReloadIcon />
          </div>
        )}
        {(!error || !imageURL) && (
          <div
            onClick={isRecording ? stopSpeechToText : startSpeechToText}
            className={`${isRecording ? "stop-icon" : ""} control-icon`}
          >
            {isRecording ? <StopIcon /> : <PlayIcon />}
          </div>
        )}
      </div>
    </div>
  );
};
export default CameraControl;
