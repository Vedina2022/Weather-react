import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import DaylyWeather from "./DailyWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <CurrentWeather />
        <DaylyWeather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
