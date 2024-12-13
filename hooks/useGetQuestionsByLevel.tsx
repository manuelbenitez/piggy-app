import axios from "axios";
import React, { useEffect } from "react";

const useGetQuestionsByLevel = (level: number) => {
  const [isFetchingQuestions, setIsFetchingQuestions] = React.useState<boolean>(false);
  const [question, setQuestion] = React.useState<Question | undefined>(undefined);

  const fetchQuestions = async () => {
    try {
      setIsFetchingQuestions(true);
      const { data } = await axios.get("api/hello");

      setQuestion(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsFetchingQuestions(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [level]);
  return {
    isFetchingQuestions,
    question,
  };
};

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  correctAnswer: number;
  level: number;
}

interface Answer {
  id: number;
  answer: string;
}

export default useGetQuestionsByLevel;
