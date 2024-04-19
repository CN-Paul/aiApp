import { useState } from "react";
//WIP
export function useSurveyManager() {
  const [survey, setSurvey] = useState<"" | null>(null);
  const [surveyId, setSurveyId] = useState("");

  return { survey, setSurvey, surveyId, setSurveyId };
}
