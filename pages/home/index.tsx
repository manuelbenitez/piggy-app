import { useState } from "react";
import Typography from "@components/ui/Typography/Typography";
import styles from "@styles/pages/Home.module.scss";
import classNames from "classnames";
import Button from "@components/ui/Button/Button";
import useGetQuestionsByLevel from "../../hooks/useGetQuestionsByLevel";
import dynamic from "next/dynamic";
import { useAccount } from "wagmi";
import axios from "axios";
import { API_ENDPOINT } from "../../service/api.constants";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [selected, setSelected] = useState<number>(-1);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [reveal, setReveal] = useState<boolean>(false);
  const { question, isFetchingQuestions } = useGetQuestionsByLevel();
  const { address, chainId } = useAccount();
  const handleResponse = async () => {
    setReveal(true);
    if (!question || !chainId || !address) return;

    if (!process.env.NEXT_PUBLIC_PAYMASTER_ADDRESS) {
      throw new Error("Paymaster address not set in env");
    }

    if (!process.env.NEXT_PUBLIC_TOKEN_ADDRESS) {
      throw new Error("Token address not set in env");
    }

    if (selected + 1 === question?.correctAnswer) {
      console.log("Correct");
      setCorrect(true);

      try {
        const response = await axios.post(API_ENDPOINT + `transaction/${address}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log(response, "response");

        await axios.put(API_ENDPOINT + "level", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setCorrect(false);
      console.log("Incorrect");
    }
  };

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
          {/* {correct && <Lottie animationData={chestAnimation} />} */}
        </div>
      </div>
    </div>
  );
}
