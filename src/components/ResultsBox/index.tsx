import "./styles.scss";
import { useAppStore } from "../../stores/appStore";
import { Card, Col, Row } from "antd";
import { CustomEmpty } from "../CustomEmpty";
import { CustomLoader } from "../CustomLoader";
import { Highlighter } from "../Highlighter";
import { htmlStringParser } from "../../utils/htmlToStringParser";

export const ResultsBox = () => {
    const wikiResults = useAppStore(state => state.wikiResults);
    const wikiResultsLoading = useAppStore(state => state.wikiResultsLoading);
    const highlightText = useAppStore(state => state.highlightText);

    return (
        <div className="results-box-wrapper">
            {wikiResultsLoading ? (
                <CustomLoader loadingDescription="Loading..." />
            ) : wikiResults.length > 0 ? (
                <Row gutter={[12, 12]}>
                    {wikiResults.map(result => (
                        <Col key={result.pageid} span={12}>
                            <Card
                                title={<Highlighter text={htmlStringParser(result.title)} highlight={highlightText} />}
                                bordered={false}
                            >
                                {<Highlighter text={htmlStringParser(result.snippet)} highlight={highlightText} />}
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
