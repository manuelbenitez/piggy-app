// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({
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
    res.status(500).json(e);
  }
}
