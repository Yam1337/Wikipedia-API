import "./styles/main.scss";
import "./styles/_variables.scss";
import { HomePage } from "./pages/Home/HomePage";
import { useAppStore } from "./stores/appStore";

function App() {
    const wikiResults = useAppStore(state => state.wikiResults);
    const setWikiResults = useAppStore(state => state.setWikiResults);
    console.log(wikiResults, setWikiResults);
    return (
        <div className="app-container">
            <HomePage />
        </div>
    );
}

export default App;
