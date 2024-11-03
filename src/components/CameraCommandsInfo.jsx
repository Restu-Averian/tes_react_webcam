import {
  KEYWORDS_AGAIN,
  KEYWORDS_EXPAND,
  KEYWORDS_MIRROR,
  KEYWORDS_SS,
  KEYWORDS_STOP,
} from "../constants";

const CameraCommandsInfo = () => {
  return (
    <div style={{ position: "absolute", right: 25 }}>
      <ol>
        <li>Stop Command : {KEYWORDS_STOP?.join(",")}</li>
        <li>Screenshot : {KEYWORDS_SS?.join(",")}</li>
        <li>Take Screenshot Again : {KEYWORDS_AGAIN?.join(",")}</li>
        <li>Mirror : {KEYWORDS_MIRROR?.join(",")}</li>
        <li>Expand : {KEYWORDS_EXPAND?.join(",")}</li>
      </ol>
    </div>
  );
};
export default CameraCommandsInfo;
