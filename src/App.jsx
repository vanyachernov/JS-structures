import './App.css'
import HottestDay from "./components/HottestDay.jsx";
import WeatherList from "./components/WeatherList.jsx";

function App() {

  return (
      <div className="weather">
          <h1>Дані про погоду</h1>
          <WeatherList />
          <HottestDay />
      </div>
  )
}

export default App
