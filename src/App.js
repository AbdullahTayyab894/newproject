import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Learning from './components/Learning/Learning'
import VideoPlayList from "./components/Learning/playlists/VideoPlayList";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Learning />
    </div>
  );
}

export default App;
