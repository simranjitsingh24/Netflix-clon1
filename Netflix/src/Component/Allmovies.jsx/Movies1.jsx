import "./Movies1.css";
import { Storedata1, data1, data2 } from "/data/data.js";

export default function Movies1() {
  return (
    <div className="list-background">
      <h2 className="heading"> TV Shows</h2>
      <div className="movies-list">
        {Storedata1.map((user) => (
          <div key={user.movie1}>
            <img src={user.movie1} alt="img" className="img-movie" />
          </div>
        ))}
      </div>
      <h2 className="heading"> Trending Now </h2>
      <div className="movies-list">
        {data1.map((user) => (
          <div key={user.movie1}>
            <img src={user.movie1} alt="img" className="img-movie" />
          </div>
        ))}
      </div>
      <h2 className="heading">Hindi Movie Tv </h2>
      <div className="movies-list">
        {data2.map((user) => (
          <div key={user.movie1}>
            <img src={user.movie1} alt="img" className="img-movie" />
          </div>
        ))}
      </div>
    </div>
  );
}
