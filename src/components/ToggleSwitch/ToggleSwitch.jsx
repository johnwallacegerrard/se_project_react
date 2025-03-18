import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

const ToggleSwitch = () => {
  const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTempUnitContext
  );

  //   const [isChecked, setIsChecked] = useState(currentTempUnit === "C");
  //   useEffect(() => setIsChecked(currentTempUnit === "C"), [currentTempUnit]);

  return (
    <label htmlFor="toggle-switch-checkbox" className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch_checkbox"
        id="toggle-switch-checkbox"
        name="toggle-switch-checkbox"
        value={currentTempUnit}
        onChange={handleToggleSwitchChange}
      />
      <span
        className={`toggle-switch__circle ${
          currentTempUnit === "C" ? "toggle-switch__circle_C" : ""
        }`}
      ></span>
      <span
        className={`toggle-switch__text toggle-switch__text_F ${
          currentTempUnit === "F" ? "toggle-switch__active" : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_C ${
          currentTempUnit === "C" ? "toggle-switch__active" : ""
        }`}
      >
        C
      </span>
    </label>
  );
};

export default ToggleSwitch;
