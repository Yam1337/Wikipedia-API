import { Spin } from "antd";

type CustomLoaderProps = {
    loadingDescription?: string;
};

export const CustomLoader = ({ loadingDescription = "Loading" }: CustomLoaderProps) => {
    return (
        <div className="empty-wrapper">
            <Spin tip={loadingDescription} size="large" />
        </div>
    );
};
