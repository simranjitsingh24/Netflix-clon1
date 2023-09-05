import "./Button.css";
import { FaPlay } from "react-icons/fa";

export default function Button(props) {
  return (
    <div>
      <button className="btn">
        <FaPlay className="hii" />
        {props.btnname}
      </button>
    </div>
  );
}
