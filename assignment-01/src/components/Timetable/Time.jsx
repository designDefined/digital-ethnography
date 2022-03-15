import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal";

const Time = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`item content ${data?.detail ? "detailed" : ""}`}
        onClick={() => {
          if (data?.detail) {
            dispatch(openModal(data));
          }
        }}
      >
        <div className="time">{data.time}</div>
        <div className="location">{data.location}</div>
        <div className="main">{data.main}</div>
        <div className="sub">{data.sub}</div>
      </div>
    </>
  );
};
export default Time;
