import Popup from "../Movie-popup/Popup";
import "./Movies1.css";
import { Storedata1, data1, data2 } from "/data/data.js";
import { useState } from "react";

export default function Movies1() {
  const [Open, setOpen] = useState(false);
  function open() {
    setOpen(true);
  }
  function close() {
    setOpen(false);
  }
  return (
    <div className="list-background">
      <h2 className="heading"> TV Shows</h2>
      <div className="movies-list">
        {Storedata1.map((user) => (
          <div key={user.movie1}>
            <img
              src={user.movie1}
              alt="img"
              className="img-movie"
              onClick={open}
            />
          </div>
        ))}
      </div>
      <h2 className="heading"> Trending Now </h2>
      <div className="movies-list">
        {data1.map((user) => (
          <div key={user.movie1}>
            <img
              src={user.movie1}
              alt="img"
              className="img-movie"
              onClick={open}
            />
          </div>
        ))}
      </div>
      <h2 className="heading">Hindi Movie Tv </h2>
      <div className="movies-list">
        {data2.map((user) => (
          <div key={user.movie1}>
            <img
              src={user.movie1}
              alt="img"
              className="img-movie"
              onClick={open}
            />
          </div>
        ))}
      </div>
      {Open && (
        <div className="popup">
          <>
            <Popup btn={close} />
          </>
        </div>
      )}
    </div>
  );
}
