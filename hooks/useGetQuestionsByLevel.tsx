import React, { useEffect } from "react";

const useGetQuestionsByLevel = (level: number) => {
  const [isFetchingQuestions, setIsFetchingQuestions] = React.useState<boolean>(false);
  const [question, setQuestion] = React.useState<Question | undefined>(undefined);

  const fetchQuestions = async () => {
    try {
      setIsFetchingQuestions(true);

      setQuestion({
        id: 1,
        question: "¿Para qué sirve el dinero?",
        answers: [
          { id: 1, answer: "Para construir castillos mágicos." },
          { id: 2, answer: "Para comprar cosas que necesitamos o queremos." },
          { id: 3, answer: "Para decorar nuestra casa." },
          { id: 4, answer: "Para jugar con él como si fuera un juguete." },
          { id: 5, answer: "Para hacer trucos de magia." },
        ],
        correctAnswer: 2,
        level: 1,
      });
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
