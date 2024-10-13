import Webcam from "react-webcam";
import { useCameraContext } from "../context/CameraContextProvider";

const Camera = () => {
  const { isExpand, webcamRef, imageURL, isMirror } = useCameraContext();

  if (imageURL) {
    return <img src={imageURL} width="100%" height="100%" />;
  }
  return (
    <div style={{ position: "relative", marginTop: 100 }}>
      <Webcam
        ref={webcamRef}
        height="100%"
        width="100%"
        screenshotFormat="image/jpeg"
        style={{
          ...(isExpand && {
            objectFit: "cover",
          }),
          position: "fixed",
          inset: 0,
          ...(isMirror && {
            transform: "scale(-1,1)",
          }),
        }}
        videoConstraints={{
          frameRate: 30,
        }}
      />
    </div>
  );
};
export default Camera;
