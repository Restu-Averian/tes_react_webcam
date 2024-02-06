import Webcam from "react-webcam";

function App() {
  return (
    <>
      <Webcam
        style={{
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        videoConstraints={{
          aspectRatio: 1,
        }}
      />
    </>
  );
}

export default App;
