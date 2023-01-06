import { ResultsBox } from "../../components/ResultsBox";
import { SearchEngine } from "../../components/SearchEngine";

export const HomePage = () => {
    return (
        <div>
            <SearchEngine />
            <ResultsBox />
        </div>
    );
};
