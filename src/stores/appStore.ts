import create from "zustand";
import { WikiResult } from "../types";

export interface AppStore {
    wikiResults: WikiResult[];
    setWikiResults: (wikiResults: WikiResult[]) => void;
    wikiResultsLoading: boolean;
    setWikiResultsLoading: (resultsLoading: boolean) => void;
}

export const useAppStore = create<AppStore>(set => ({
    wikiResults: [],
    setWikiResults: (wikiResults: WikiResult[]) => set({ wikiResults }),
    wikiResultsLoading: false,
    setWikiResultsLoading: (wikiResultsLoading: boolean) => set({ wikiResultsLoading }),
}));
