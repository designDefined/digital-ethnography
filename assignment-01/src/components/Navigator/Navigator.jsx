import "./Navigator.scss";
import { useDispatch, useSelector } from "react-redux";
import { setStatsTap, setSummaryTap, setTimeTap } from "../../redux/tap";

const Navigator = () => {
  const tapState = useSelector((state) => state.tap.currentTap);
  const dispatch = useDispatch();
  return (
    <div className="Navigator">
      <div
        className={`Navigator-button style-01 ${
          tapState === "summary" ? "selected" : ""
        }`}
        onClick={() => {
          dispatch(setSummaryTap());
        }}
      >
        개요
      </div>
      <div
        className={`Navigator-button style-02 ${
          tapState === "time" ? "selected" : ""
        }`}
        onClick={() => {
          dispatch(setTimeTap());
        }}
      >
        기록
      </div>
      <div
        className={`Navigator-button style-03 ${
          tapState === "stats" ? "selected" : ""
        }`}
        onClick={() => {
          dispatch(setStatsTap());
        }}
      >
        통계
      </div>
    </div>
  );
};
export default Navigator;
