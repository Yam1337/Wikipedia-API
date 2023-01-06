import axios from "axios";
import { WikiResult } from "../../types";
import { customNotification } from "../../utils/customNotification";
import { CustomNotificationEnum } from "../../utils/types";

export const searchApi = async (
    value: string,
    setWikiResults: (wikiResults: WikiResult[]) => void,
    setWikiResultsLoading: (wikiResultsLoading: boolean) => void
) => {
    try {
        setWikiResultsLoading(true);
        const response = await axios.get(
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${value}`
        );
        console.log(response.data.query.search);
        setWikiResults(response.data.query.search);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error);
        customNotification(CustomNotificationEnum.error, "An error occurred!", error.message);
    } finally {
        console.log("test");
        setWikiResultsLoading(false);
    }
};
