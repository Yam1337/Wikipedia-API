import "./styles.scss";
import { useAppStore } from "../../stores/appStore";
import { Card, Col, Row } from "antd";
import { CustomEmpty } from "../CustomEmpty";
import { CustomLoader } from "../CustomLoader";
import { Highlighter } from "../Highlighter";
import { htmlStringParser } from "../../utils/htmlToStringParser";
import { useWindowSize } from "../../hooks/useWindowSize";

export const ResultsBox = () => {
    const wikiResults = useAppStore(state => state.wikiResults);
    const wikiResultsLoading = useAppStore(state => state.wikiResultsLoading);
    const highlightText = useAppStore(state => state.highlightText);

    const windowSize = useWindowSize();

    return (
        <div className="results-box-wrapper">
            {wikiResultsLoading ? (
                <CustomLoader loadingDescription="Loading..." />
            ) : wikiResults.length > 0 ? (
                <Row gutter={windowSize.width && windowSize.width > 1024 ? [12, 12] : [6, 6]}>
                    {wikiResults.map(result => (
                        <Col key={result.pageid} span={windowSize.width && windowSize.width > 1024 ? 12 : 24}>
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
