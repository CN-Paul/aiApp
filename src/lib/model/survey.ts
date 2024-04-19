export interface SurveyResult {
  id?: number;
  topic?: string;
  question?: string[];
  //중요도(0~10)
  importance?: number;
  rank?: number[];
}
