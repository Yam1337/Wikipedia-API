import { Interweave } from "interweave";
import { Card, Col, Row } from "antd";
import { useAppStore } from "../../stores/appStore";
import "./styles.scss";
import { CustomEmpty } from "../CustomEmpty";

export const ResultsBox = () => {
    const wikiResults = useAppStore(state => state.wikiResults);
    const wikiResultsLoading = useAppStore(state => state.wikiResultsLoading);

    console.log(wikiResultsLoading);

    return (
        <div className="results-box-wrapper">
            {wikiResultsLoading ? (
                "Loading..."
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
