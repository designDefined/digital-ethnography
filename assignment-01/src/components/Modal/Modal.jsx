import "./Modal.scss";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal";
import { showDetail } from "./detailParser";

const Modal = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="Modal-wrapper"
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      <div
        className="Modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="Modal-title">
          <span>{data.time}</span>
          <span>{data.location}</span>
        </div>
        <div className="Modal-content">
          <div className="Modal-main">
            <div className="Modal-label">주 활동</div>
            <div className="Modal-action">
              <div>{data.main}</div>
              <div>
                {data?.detail?.main ? showDetail(data.detail.main) : null}
              </div>
            </div>
          </div>
          <div className="Modal-sub">
            <div className="Modal-label">부 활동</div>
            <div className="Modal-action">
              <div>{data.sub}</div>
              <div>
                {data?.detail?.sub ? showDetail(data.detail.sub) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
