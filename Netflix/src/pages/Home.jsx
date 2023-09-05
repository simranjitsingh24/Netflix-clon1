import Movies1 from "../Component/Allmovies.jsx/Movies1";
import Footer from "../Component/Footer/Footer";
import Movies from "../Component/Movies/movies";
import Navbar from "../Component/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Movies />
      <Movies1 />
      <Footer />
    </div>
  );
}

export default Home;
