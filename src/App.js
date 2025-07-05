import { useState, useEffect } from "react";

const allQuestions = {
  Word: [
    // (... todas as perguntas Word aqui — as suas já estão corretas ...)
  ],
  Excel: [
    // (... todas as perguntas Excel aqui — as suas já estão corretas ...)
  ],
};

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizApp() {
  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answersByTopic, setAnswersByTopic] = useState({ Word: 0, Excel: 0 });
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (topic) {
      const shuffledQuestions = shuffleArray(allQuestions[topic]).map((q) => {
        const shuffledOptions = shuffleArray(q.options);
        const correctText = q.options[q.answer];
        const newAnswerIndex = shuffledOptions.findIndex((opt) => opt === correctText);
        return { question: q.question, options: shuffledOptions, answer: newAnswerIndex };
      });

      setQuestions(shuffledQuestions);
      setCurrent(0);
      setScore(0);
      setAnswersByTopic({ Word: 0, Excel: 0 });
      setShowResult(false);
      setFeedback(null);
      setSelectedAnswer(null);
    }
  }, [topic]);

  const handleAnswer = (index) => {
    if (feedback !== null) return;

    setSelectedAnswer(index);
    const isCorrect = index === questions[current].answer;
    if (isCorrect) {
      setScore((s) => s + 1);
      setAnswersByTopic((prev) => ({ ...prev, [topic]: prev[topic] + 1 }));
    }
    setFeedback(isCorrect ? "correct" : "wrong");

    setTimeout(() => {
      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
        setFeedback(null);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  const question = questions && questions.length > 0 ? questions[current] : null;

  if (!topic) {
    return (
      <div className="max-w-xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-6">Escolha o tópico do Quiz</h1>
        <button className="m-2 px-6 py-3 bg-blue-600 text-white rounded" onClick={() => setTopic("Word")}>
          Word 2016
        </button>
        <button className="m-2 px-6 py-3 bg-green-600 text-white rounded" onClick={() => setTopic("Excel")}>
          Excel 2016
        </button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Resultado Final</h1>
        <p className="mb-4 text-lg">
          Você acertou {score} de {questions.length} questões em {topic}.
        </p>

        <h2 className="text-xl font-semibold mb-2">Acertos por Tópico</h2>
        <div className="space-y-4 max-w-sm mx-auto">
          {Object.entries(answersByTopic).map(([tpc, count]) => {
            const total = allQuestions[tpc]?.length || 1;
            const percent = Math.round((count / total) * 100);
            return (
              <div key={tpc}>
                <div className="flex justify-between mb-1">
                  <span>{tpc}</span>
                  <span>
                    {count} / {total} ({percent}%)
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded h-5">
                  <div
                    style={{ width: `${percent}%` }}
                    className={`h-5 rounded ${tpc === "Word" ? "bg-blue-600" : "bg-green-600"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setTopic(null)}
          className="mt-6 px-6 py-3 bg-gray-700 text-white rounded"
        >
          Voltar para escolha de tópico
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz: {topic} 2016</h1>

      <div className="mb-2 font-semibold">
        Pergunta {current + 1} de {questions.length}
      </div>

      {question ? (
        <>
          <div className="p-4 border rounded mb-4">
            <p className="text-lg">{question.question}</p>
          </div>

          <div className="space-y-2">
            {question.options.map((opt, idx) => {
              let bgColor = "bg-gray-100 hover:bg-gray-200";
              if (feedback !== null) {
                if (idx === selectedAnswer) {
                  bgColor = idx === question.answer ? "bg-green-400" : "bg-red-400";
                } else if (idx === question.answer) {
                  bgColor = "bg-green-300";
                } else {
                  bgColor = "bg-gray-100";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={feedback !== null}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${bgColor}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {feedback === "correct" && (
            <div className="mt-4 text-green-700 font-semibold">Resposta correta! 🎉</div>
          )}
          {feedback === "wrong" && (
            <div className="mt-4 text-red-700 font-semibold">Resposta errada 😞</div>
          )}
        </>
      ) : (
        <p>Carregando pergunta...</p>
      )}
    </div>
  );
}


