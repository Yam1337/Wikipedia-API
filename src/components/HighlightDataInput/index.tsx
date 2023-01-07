import { Input } from "antd";
import { useAppStore } from "../../stores/appStore";

export const HighlightDataInput = () => {
    const setHighlightText = useAppStore(state => state.setHighlightText);

    const { Search } = Input;
    return (
        <div className="highlight-data-input-wrapper">
            <Search
                placeholder="Text to highlight"
                enterButton="Highlight all"
                size="large"
                allowClear
                onSearch={e => setHighlightText(e)}
            />
        </div>
    );
};
