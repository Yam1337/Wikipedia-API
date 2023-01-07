import "./styles.scss";
import { useCallback } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { debounce } from "lodash";
import { searchApi } from "./searchApi";
import { useAppStore } from "../../stores/appStore";
import { useWindowSize } from "../../hooks/useWindowSize";

export const SearchDataInput = () => {
    const setWikiResults = useAppStore(state => state.setWikiResults);
    const setWikiResultsLoading = useAppStore(state => state.setWikiResultsLoading);

    const windowSize = useWindowSize();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchedValue = e.target.value;
        if (searchedValue.length >= 1) {
            searchApi(searchedValue, setWikiResults, setWikiResultsLoading);
        } else {
            setWikiResults([]);
        }
    };

    const debouncedChangeHandler = useCallback(debounce(changeHandler, 1000), []);

    return (
        <div className="search-data-input-wrapper">
            <Input
                prefix={<SearchOutlined />}
                placeholder="Type something to search Wiki API"
                allowClear
                size={windowSize.width && windowSize.width > 1024 ? "large" : "small"}
                onChange={debouncedChangeHandler}
            />
        </div>
    );
};
