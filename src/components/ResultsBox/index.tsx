import "./styles.scss";
import { useAppStore } from "../../stores/appStore";
import { Interweave } from "interweave";
import { Card, Col, Row } from "antd";
import { CustomEmpty } from "../CustomEmpty";
import { CustomLoader } from "../CustomLoader";

export const ResultsBox = () => {
    const wikiResults = useAppStore(state => state.wikiResults);
    const wikiResultsLoading = useAppStore(state => state.wikiResultsLoading);

    return (
        <div className="results-box-wrapper">
            {wikiResultsLoading ? (
                <CustomLoader loadingDescription="Loading..." />
            ) : wikiResults.length > 0 ? (
                <Row gutter={[12, 12]}>
                    {wikiResults.map(result => (
                        <Col key={result.pageid} span={12}>
                            <Card title={<Interweave content={result.title} />} bordered={false}>
                                {<Interweave content={result.snippet} />}
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <CustomEmpty emptyDescription="No results to show..." />
            )}
        </div>
    );
};
