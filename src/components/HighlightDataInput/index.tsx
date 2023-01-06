import "./styles.scss";
import { Input, Button } from "antd";

export const HighlightDataInput = () => {
    return (
        <div className="highlight-data-input-wrapper">
            <Input.Group compact>
                <Input placeholder="Type searched word" />
                <Button type="primary">Highlight all</Button>
            </Input.Group>
        </div>
    );
};
