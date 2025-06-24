import logo from './logo.svg';
import './App.css';
import LevelPage from "./pages/Level/LevelPage";
import HelpMenu from "./components/HelpMenu/HelpMenu";

function App() {
  return (
    <div className="App">
        <LevelPage/>
        <HelpMenu/>
    </div>
  );
}

export default App;
