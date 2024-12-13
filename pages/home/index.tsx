import BottomNavigationMenu from "@components/fragments/BottomNavigationBar/BottomNavigationMenu";
import Typography from "@components/ui/Typography/Typography";
import styles from "@styles/pages/Home.module.scss";
import classNames from "classnames";
import { useState } from "react";
import useGetQuestionsByLevel from "../../hooks/useGetQuestionsByLevel";
import Button from "@components/ui/Button/Button";
import Confetti from "react-confetti";

export default function Home() {
  const [selected, setSelected] = useState<number>(-1);
  const { question, isFetchingQuestions } = useGetQuestionsByLevel(1);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [reveal, setReveal] = useState<boolean>(false);
  const handleResponse = () => {
    setReveal(true);
    if (selected + 1 === question?.correctAnswer) {
      console.log("Correct");
      setCorrect(true);

      console.log("minting NFT...");

      console.log("NFT minted");

      console.log("redirecting...");
    } else {
      setCorrect(false);
      console.log("Incorrect");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.quizContainer}>
        <div className={styles.quizItemContainer}>
          {!isFetchingQuestions && question && (
            <>
              <Typography text={question.question} type={"h1"} />
              {question.answers.map((answer, index) => (
                <div
                  key={answer.id}
                  className={classNames(
                    styles.quizItem,
                    selected === index && styles.selected,
                    correct && selected === index && reveal && styles.correct,
                    !correct && selected === index && reveal && styles.incorrect
                  )}
                  onClick={() => {
                    if (!correct) {
                      setReveal(false);
                      setSelected(index);
                    }
                  }}
                >
                  <Typography text={answer.answer} type={"h4"} />
                </div>
              ))}
            </>
          )}
          {correct && <Confetti gravity={0.1} friction={0.97} />}
          <Button
            text={"Responder"}
            type={"blue"}
            size={"small"}
            onClick={() => handleResponse()}
          />
        </div>
      </div>
      <BottomNavigationMenu />
    </div>
  );
}
