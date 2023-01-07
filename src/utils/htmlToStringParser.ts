export const htmlStringParser = (htmlString: string) => {
    return htmlString.replace(/(<([^>]+)>)/gi, "");
};
