import "./styles.scss";
import { useCallback } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { debounce } from "lodash";
import { searchApi } from "./searchApi";
import { useAppStore } from "../../stores/appStore";

export const SearchDataInput = () => {
    const setWikiResults = useAppStore(state => state.setWikiResults);
    const setWikiResultsLoading = useAppStore(state => state.setWikiResultsLoading);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchedValue = e.target.value;
        if (searchedValue.length >= 1) {
            searchApi(searchedValue, setWikiResults, setWikiResultsLoading);
        }
    };

    const debouncedChangeHandler = useCallback(debounce(changeHandler, 1000), []);

    return (
        <div className="search-data-input-wrapper">
            <Input
                prefix={<SearchOutlined />}
                placeholder="Type something to search Wiki API"
                allowClear
                size="large"
                onChange={debouncedChangeHandler}
            />
        </div>
    );
};
