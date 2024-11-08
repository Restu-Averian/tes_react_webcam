import Camera from "./components/Camera";
import CameraContextProvider from "./context/CameraContextProvider";
import CameraControl from "./components/CameraControl";
import CameraCommandsInfo from "./components/CameraCommandsInfo";

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
      <CameraCommandsInfo />
    </CameraContextProvider>
  );
}

export default App;
