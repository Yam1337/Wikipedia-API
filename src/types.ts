export type WikiResult = {
    ns: number;
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: Date;
};

export type WindowSizeType = {
    width: number | undefined;
    height: number | undefined;
};
