import axios from "axios";
import React, { useEffect } from "react";
import { API_ENDPOINT } from "../service/api.constants";

const useGetQuestionsByLevel = () => {
  const [isFetchingQuestions, setIsFetchingQuestions] = React.useState<boolean>(false);
  const [question, setQuestion] = React.useState<Question | undefined>(undefined);

  const fetchQuestions = async () => {
    try {
      setIsFetchingQuestions(true);

      const level = localStorage.getItem("level");
      const token = localStorage.getItem("token");

      const nextLevel = Number(level) + 1;

      const { data } = await axios.get(API_ENDPOINT + `levels/${nextLevel}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setQuestion({ ...data.questions[0] });
    } catch (e) {
      console.error(e);
    } finally {
      setIsFetchingQuestions(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
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
