import Webcam from "react-webcam";
import "./camera.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          try {
            setOpen(true);
          } catch (err) {
            alert(JSON.stringify(err));
          }
        }}
      >
        Open Camera
      </button>
      {open && <Webcam />}
    </>
  );
}

export default App;
