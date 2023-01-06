import { AppLogo } from "../AppLogo";
import { HighlightDataInput } from "../HighlightDataInput";
import { SearchDataInput } from "../SearchDataInput";
import "./styles.scss";

export const SearchEngine = () => {
    return (
        <div className="search-engine-wrapper">
            <SearchDataInput />
            <AppLogo />
            <HighlightDataInput />
        </div>
    );
};
