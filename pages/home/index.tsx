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
import chestAnimation from "@public/animations/chest-animation.json";
import { Router, useRouter } from "next/router";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [selected, setSelected] = useState<number>(-1);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [reveal, setReveal] = useState<boolean>(false);
  const { question, isFetchingQuestions } = useGetQuestionsByLevel();
  const { address, chainId } = useAccount();

  const router = useRouter();

  const handleResponse = async () => {
    setReveal(true);
    if (!question || !chainId || !address) return;

    if (selected + 1 === question?.correctAnswer) {
      console.log("Correct");
      setCorrect(true);

      try {
        const level = localStorage.getItem("level");

        const nextLevel = Number(level) + 1;

        const { data } = await axios.put(API_ENDPOINT + `user/level/${nextLevel}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        localStorage.setItem("level", data.level.toString());
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
        {!isFetchingQuestions && question && (
          <>
            <div className={styles.header}>
              <Typography text={question.question} type={"h1"} />
            </div>
            <div className={styles.quizItemContainer}>
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
                text={"Submit"}
                type={"blue"}
                size={"main"}
                disabled={selected === -1}
                onClick={() => {
                  handleResponse();
                }}
              />
            </div>
          </>
        )}
        {correct && (
          <div className={styles.chest}>
            <Typography
              text={"Congratulations! You earn a reward!"}
              type={"h1"}
              alignSelf="center"
            />
            <Lottie animationData={chestAnimation} />
            <Button
              text={"Continue"}
              type={"blue"}
              size={"main"}
              onClick={() => {
                if (correct) {
                  router.push("/profile");
                } else {
                  handleResponse();
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
