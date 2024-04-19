import { create } from "zustand";
import { SurveyResult } from "@/lib/model/survey";

export interface SurveyResultStore {
  surveyResult: SurveyResult[];
  addSurveyResult: (surveyResult: SurveyResult) => void;
  clearSurveyResult: () => void;
}

export const useSurveyResult = create<SurveyResultStore>((set) => ({
  surveyResult: [],
  addSurveyResult: (surveyResult: SurveyResult) => {
    set((state) => ({
      surveyResult: [...state.surveyResult, surveyResult],
    }));
  },
  clearSurveyResult: () => {
    set({ surveyResult: [] });
  },
}));
