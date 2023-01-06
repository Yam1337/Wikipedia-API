import { HighlightDataInput } from "../HighlightDataInput";
import { SearchDataInput } from "../SearchDataInput";
import "./styles.scss";

export const SearchEngine = () => {
    return (
        <div className="search-engine-wrapper">
            <SearchDataInput />
            <HighlightDataInput />
        </div>
    );
};
