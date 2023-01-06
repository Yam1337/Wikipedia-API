import create from "zustand";

export interface AppStore {
    wikiResults: any[];
    setWikiResults: (wikiResults: any[]) => void;
}

export const useAppStore = create<AppStore>(set => ({
    wikiResults: [],
    setWikiResults: (wikiResults: any[]) => set({ wikiResults }),
}));
