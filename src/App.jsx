import Camera from "./components/Camera";
import CameraContextProvider from "./context/CameraContextProvider";
import CameraControl from "./components/CameraControl";

/**
 * 1. Expand
 * 2. Take screenshot\
 * 3. Take again
 * @returns
 */
function App() {
  return (
    <CameraContextProvider>
      <Camera />
      <CameraControl />
    </CameraContextProvider>
  );
}

export default App;
