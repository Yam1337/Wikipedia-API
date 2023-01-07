import { escapeRegExp } from "lodash";

type HighlighterProps = {
    text: string;
    highlight: string;
};

export const Highlighter = ({ text = "", highlight = "" }: HighlighterProps) => {
    if (!highlight.trim()) {
        return <span>{text}</span>;
    }
    const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi");
    const parts = text.split(regex);
    return (
        <span>
            {parts
                .filter(part => part)
                .map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>))}
        </span>
    );
};
