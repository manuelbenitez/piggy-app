import { useEffect, useState } from "react";
import Typography from "@components/ui/Typography/Typography";
import styles from "@styles/pages/Home.module.scss";
import classNames from "classnames";
import Button from "@components/ui/Button/Button";
import useGetQuestionsByLevel from "../../hooks/useGetQuestionsByLevel";
import Confetti from "react-confetti";
import Lottie from "lottie-react";
import chestAnimation from "@public/animations/chest-animation.json";
// import { useEthersProvider } from "../../hooks/useEthersProvider";

export default function Home() {
  const [selected, setSelected] = useState<number>(-1);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [reveal, setReveal] = useState<boolean>(false);
  const { question, isFetchingQuestions } = useGetQuestionsByLevel(1);
  // const provider = useEthersProvider();

  const handleResponse = async () => {
    setReveal(true);
    if (!question) return;
    if (selected + 1 === question?.correctAnswer) {
      console.log("Correct");
      setCorrect(true);

      console.log("connecting paymaster");
      // console.log(await provider?.getNetwork());
      console.log("minting NFT...");

      console.log("NFT minted");

      console.log("redirecting...");
    } else {
      setCorrect(false);
      console.log("Incorrect");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window is defined");
    }
  }, []);

  if (typeof window !== "undefined") return;

  return (
    <div className={styles.container}>
      <div className={styles.quizContainer}>
        <div className={styles.quizItemContainer}>
          {!isFetchingQuestions && question && !correct && (
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
              <Button
                text={"Responder"}
                type={"blue"}
                size={"main"}
                disabled={selected === -1}
                onClick={() => handleResponse()}
              />
            </>
          )}
          {correct && <Confetti gravity={0.1} friction={0.97} />}
          {correct && <Lottie animationData={chestAnimation} />}
        </div>
      </div>
    </div>
  );
}
