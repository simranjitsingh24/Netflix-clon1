import "./movies.css";
import logo1 from "../../assets/Image/moviename.webp";
import Button from "../Button/Button";
export default function Movies() {
  return (
    <div className="container1">
      <div className="contant">
        <img src={logo1} className="movie-img" />
        <h2 className="text">Watch in Hindi, Tamil, Telugu</h2>
        <p className="para">
          When there mother take off on a busniess trip, two bickering <br />
          brothers unite to secretly attend the hottest party of the year
          <br />
          before she returns. The Mother is played by Bollywood legend <br />
          Juhi Chawla (Ek Lakdi Ko Dekha Toh Aisa laga).
          <Button btnname="  Play" />
        </p>
      </div>
    </div>
  );
}
