import "./styles.scss";
import { Empty } from "antd";

type CustomEmptyProps = {
    emptyDescription?: string;
};

export const CustomEmpty = ({ emptyDescription = "No data" }: CustomEmptyProps) => {
    return (
        <div className="empty-wrapper">
            <Empty description={emptyDescription} />
        </div>
    );
};
