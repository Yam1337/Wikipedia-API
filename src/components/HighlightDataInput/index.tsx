import "./styles.scss";
import { Input } from "antd";
import { useAppStore } from "../../stores/appStore";
import { useWindowSize } from "../../hooks/useWindowSize";

export const HighlightDataInput = () => {
    const setHighlightText = useAppStore(state => state.setHighlightText);

    const windowSize = useWindowSize();

    const { Search } = Input;
    return (
        <div className="highlight-data-input-wrapper">
            <Search
                placeholder="Text to highlight"
                enterButton="Highlight all"
                size={windowSize.width && windowSize.width > 1024 ? "large" : "small"}
                allowClear
                onSearch={e => setHighlightText(e)}
            />
        </div>
    );
};
