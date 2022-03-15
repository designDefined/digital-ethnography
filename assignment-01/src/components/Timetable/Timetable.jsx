import csvFile from "../../data/phoneLog.json";
import "./Timetable.scss";
import Time from "./Time";

const Timetable = () => {
  console.log(csvFile);
  return (
    <div className="Timetable">
      <div className="item label">
        <div className="time">시간</div>
        <div className="location">장소</div>
        <div className="main">주 활동</div>
        <div className="sub">부 활동</div>
      </div>
      {csvFile.map((item) => {
        return <Time data={item} />;
      })}
    </div>
  );
};

export default Timetable;
