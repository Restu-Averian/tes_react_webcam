import { useState } from "react";
import Webcam from "react-webcam";

function App() {
  const [val, setVal] = useState(1);
  const [useObjectFit, setUseObjectFit] = useState(false);
  return (
    <>
      <div style={{ position: "relative", marginTop: 100 }}>
        <Webcam
          style={{
            ...(useObjectFit && {
              objectFit: "cover",
            }),
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
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
  );
}

export default App;
