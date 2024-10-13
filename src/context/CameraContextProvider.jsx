import { createContext, useContext, useEffect, useRef, useState } from "react";

/**
 * @typedef CameraContextData
 * @property {boolean} isExpand
 * @property {import("react").Dispatch<import("react").SetStateAction<boolean>>} setExpand
 * @property {string} imageURL
 * @property {import("react").Dispatch<import("react").SetStateAction<string>>} setImageURL
 * @property {boolean} isMirror
 * @property {import("react").Dispatch<import("react").SetStateAction<boolean>>} setMirror
 * @property {import("react").Ref<import('react-webcam')> } webcamRef
 * @property {(type: 'mirror'|'expand', value: boolean)=>void} onSetConfigLS
 */

/** @type {import("react").Context<CameraContextData>} */
const CameraContext = createContext({});

export const useCameraContext = () => useContext(CameraContext);

const KEY_LS = "CAMERA_CONFIG";

const CameraContextProvider = ({ children }) => {
  const [isExpand, setExpand] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [isMirror, setMirror] = useState(false);

  const cameraConfig = JSON.parse(localStorage?.getItem(KEY_LS) || "{}");

  const webcamRef = useRef();

  /**
   *
   * @param {'mirror' | 'expand'} type
   * @param {boolean} value
   */
  const onSetConfigLS = (type, value) => {
    const newCameraConfig = {
      ...cameraConfig,
      [type]: value,
    };

    localStorage?.setItem(KEY_LS, JSON.stringify(newCameraConfig || {}));
  };

  useEffect(() => {
    setMirror(cameraConfig?.mirror || false);
    setExpand(cameraConfig?.expand || false);
  }, []);

  return (
    <CameraContext.Provider
      value={{
        isExpand,
        setExpand,
        webcamRef,
        setImageURL,
        imageURL,
        setMirror,
        isMirror,
        onSetConfigLS,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};
export default CameraContextProvider;
