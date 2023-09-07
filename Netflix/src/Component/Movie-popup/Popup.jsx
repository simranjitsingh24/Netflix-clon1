import "./Popup.css";
export default function Popup(props) {
  return (
    <div className="container-popup">
      <div className="main-div1">
        <div className="left">
          <h2>
            <span className="color">97% March </span>
            <span>2023 4 seasions</span>
          </h2>
          <p>laanguage, nudity, tobacco use, violence</p>
          <p className="lines">
            the top lsraeli agent comes out of retirement to hunt for a
            Palestinian fighter he <br /> thought hed killed, setting a chaotic
            chain if events into motion
          </p>
        </div>
        <div className="right">
          <p>
            <span>Cast:</span> Lion Raz, ltzik Cohen,Hishan
            <br />
            Suliman,more
          </p>
          <p>
            <span>Genres:</span>TV Dramas, lsrarli, TV Action & Adventure
          </p>
          <p>
            <span>This show is:</span> Gritty
          </p>
          <button onClick={props.btn} className="btn-popup">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
