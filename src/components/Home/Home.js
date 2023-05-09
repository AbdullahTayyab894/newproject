import Navbar from './navbar/Navbar'
import Header from './header/Header'
import Description from './description/Description'
import Solution from './solution/Solution'
import Selection from './selection/Selection'
import Explore from './explore/Explore'
import Ads from './ads/Ads'
import Offers from './offers/Offers'
import NewsLetter from './newsletter/NewsLetter'
import Footer from './footer/Footer'

function Home() {
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

export default Home;
