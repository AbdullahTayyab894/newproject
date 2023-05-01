import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Description from "./components/description/Description";
import Solution from "./components/solution/Solution";
import Selection from './components/selection/Selection'
import Explore from "./components/explore/Explore";
import Ads from "./components/ads/Ads";
import Offers from "./components/offers/Offers";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Description />
      <Solution />
      <Selection />
      <Explore />
      <Ads />
      <Offers />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
