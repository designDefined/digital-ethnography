import "./css-reset.css";
import "./App.scss";
import "./scss/common.scss";
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Timetable from "./components/Timetable/Timetable";
import Summary from "./components/Summary/Summary";
import Stats from "./components/Stats/Stats";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";

const App = () => {
  const modalState = useSelector((state) => state.modal.data);
  const tapState = useSelector((state) => state.tap.currentTap);
  return (
    <div className="App">
      <Header />
      <Navigator />
      {tapState === "summary" ? <Summary /> : null}
      {tapState === "time" ? <Timetable /> : null}
      {tapState === "stats" ? <Stats /> : null}
      {modalState ? <Modal data={modalState} /> : null}
    </div>
  );
};

export default App;
