import { useState } from "react";
import Webcam from "react-webcam";

function App() {
  const [val, setVal] = useState(1);
  const [useObjectFit, setUseObjectFit] = useState(false);
  const [showCamera, setShowCamera] = useState(true);
  const [msg, setMsg] = useState("");
  return (
    <>
      <input
        onKeyDown={(e) => {
          if (e?.code === "Enter") {
            setMsg("code === Enter");
          } else if (e?.key === "Enter") {
            setMsg("key === Enter");
          } else if (e?.keyCode === 13) {
            setMsg("keyCode === 13");
          } else if (e?.which === 13) {
            setMsg("which === 13");
          }
        }}
      />
      {msg}
      <button
        style={{ zIndex: 99999, position: "relative" }}
        onClick={() => {
          setShowCamera(!showCamera);
        }}
      >
        Toggle Camera
      </button>

      {showCamera && (
        <>
          <div style={{ position: "relative", marginTop: 100 }}>
            <Webcam
              height="100%"
              width="100%"
              style={{
                ...(useObjectFit && {
                  objectFit: "cover",
                }),
                position: "fixed",
                inset: 0,
                transform: `scale(${val})`,
              }}
              videoConstraints={{
                frameRate: 30,
              }}
            />
          </div>

          <div style={{ zIndex: 99999, position: "relative" }}>
            <button onClick={() => setUseObjectFit(!useObjectFit)}>
              use object fit : {useObjectFit ? "true" : "false"}
            </button>

            <input
              type="range"
              value={val}
              max={10}
              min={1}
              onChange={({ target: { value } }) => {
                setVal(Number(value));
              }}
            />
            <p style={{ color: "white" }}>{val}</p>
          </div>
        </>
      )}
    </>
  );
}

export default App;
