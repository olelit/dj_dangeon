import logo from './logo.svg';
import './App.css';
import LevelPage from "./pages/Level/LevelPage";
import HelpMenu from "./components/HelpMenu/HelpMenu";

function App() {
  return (
    <div className="flex h-screen">
        <div className="w-4/5 flex items-center justify-center">
            <LevelPage />
        </div>
        <HelpMenu />
    </div>
  );
}

export default App;
