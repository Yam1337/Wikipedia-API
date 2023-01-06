import "./styles.scss";
import { useCallback } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { debounce } from "lodash";

export const SearchDataInput = () => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    const debouncedChangeHandler = useCallback(debounce(changeHandler, 1000), []);

    return (
        <div className="search-data-input-wrapper">
            <Input
                prefix={<SearchOutlined />}
                placeholder="Type something to search Wiki API"
                allowClear
                onChange={debouncedChangeHandler}
            />
        </div>
    );
};
