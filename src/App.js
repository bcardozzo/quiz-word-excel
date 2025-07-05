import { useState, useEffect } from "react";

const allQuestions = {
  Word: [
    // Página Inicial
    {
      question: "Qual comando na guia Página Inicial permite alterar o estilo do texto?",
      options: ["Normal", "Estilos Rápidos", "Quebra de Página", "Localizar"],
      answer: 1,
    },
    {
      question: "Para copiar a formatação de um texto para outro, qual ferramenta usar na guia Página Inicial?",
      options: ["Pincel de Formatação", "Cortar", "Colar Especial", "Destacar"],
      answer: 0,
    },
    {
      question: "Qual botão da guia Página Inicial insere marcadores em uma lista?",
      options: ["Numeração", "Alinhar à esquerda", "Marcadores", "Recuo"],
      answer: 2,
    },
    // Inserir
    {
      question: "Para adicionar uma tabela no documento, em qual guia do Word fica essa opção?",
      options: ["Layout", "Inserir", "Referências", "Exibir"],
      answer: 1,
    },
    {
      question: "Qual opção da guia Inserir insere um cabeçalho no documento?",
      options: ["Cabeçalho", "Rodapé", "Quebra de Página", "Colunas"],
      answer: 0,
    },
    {
      question: "Para inserir uma imagem do computador, que botão usar na guia Inserir?",
      options: ["Imagem Online", "Imagens", "Formas", "WordArt"],
      answer: 1,
    },
    // Desenhar
    {
      question: "Qual recurso da guia Desenhar permite criar desenhos livres com a caneta digital?",
      options: ["Ferramenta Caneta", "Seleção por Laço", "Pincel de Formatação", "Grade de Desenho"],
      answer: 0,
    },
    {
      question: "Na guia Desenhar, qual ferramenta ajuda a apagar traços desenhados?",
      options: ["Apagador", "Borracha", "Recortar", "Selecionar"],
      answer: 0,
    },
    {
      question: "Qual guia deve estar ativa para usar a opção “Formas” para desenhos geométricos?",
      options: ["Inserir", "Desenhar", "Design", "Layout"],
      answer: 0,
    },
    // Design
    {
      question: "Qual opção na guia Design muda a cor do tema do documento?",
      options: ["Temas", "Estilos Rápidos", "Configurar Página", "Quebras"],
      answer: 0,
    },
    {
      question: "Para aplicar um estilo de fundo diferente ao documento, qual recurso da guia Design usar?",
      options: ["Marca d’água", "Cabeçalho", "Bordas da Página", "Colunas"],
      answer: 0,
    },
    {
      question: "Na guia Design, o que a opção “Efeitos” modifica?",
      options: ["A formatação das imagens", "Os efeitos visuais do tema", "O tamanho do papel", "A orientação da página"],
      answer: 1,
    },
    // Layout
    {
      question: "Em Layout, para mudar a margem da página, qual botão usar?",
      options: ["Margens", "Quebras", "Tamanho", "Colunas"],
      answer: 0,
    },
    {
      question: "Na guia Layout, qual comando permite definir a orientação da página como paisagem?",
      options: ["Quebras", "Margens", "Orientação", "Tamanho"],
      answer: 2,
    },
    {
      question: "Em Layout, o que faz o comando “Colunas”?",
      options: ["Divide o texto em mais de uma coluna", "Insere tabelas", "Adiciona margens extras", "Alinha o texto"],
      answer: 0,
    },
    // Referências
    {
      question: "Para inserir uma nota de rodapé, que guia usar?",
      options: ["Inserir", "Referências", "Revisão", "Exibir"],
      answer: 1,
    },
    {
      question: "Qual recurso da guia Referências cria um índice automático do documento?",
      options: ["Sumário", "Nota de rodapé", "Legendas", "Comentários"],
      answer: 0,
    },
    {
      question: "O que faz o comando “Inserir Citação” na guia Referências?",
      options: ["Adiciona fonte bibliográfica", "Insere imagem", "Insere tabela", "Cria cabeçalho"],
      answer: 0,
    },
    // Correspondências
    {
      question: "Na guia Correspondências, qual ferramenta é usada para criar etiquetas?",
      options: ["Iniciar Mala Direta", "Etiquetas", "Cartas", "Modelos"],
      answer: 1,
    },
    {
      question: "O que faz a opção “Mesclar para Novo Documento” na mala direta?",
      options: [
        "Cria um documento com todas as cartas mescladas",
        "Imprime o documento",
        "Apaga os dados",
        "Envia e-mail",
      ],
      answer: 0,
    },
    {
      question: "Para importar uma lista de endereços para mala direta, qual botão usar?",
      options: [
        "Selecionar Destinatários",
        "Inserir Campos de Mesclagem",
        "Visualizar Resultados",
        "Finalizar e Mesclar",
      ],
      answer: 0,
    },
    // Revisão
    {
      question: "Qual comando na guia Revisão permite contar palavras do documento?",
      options: ["Contar Palavras", "Controlar Alterações", "Traduzir", "Inserir Comentário"],
      answer: 0,
    },
    {
      question: "Para revisar o documento com sugestões e alterações, qual recurso usar?",
      options: ["Controlar Alterações", "Editor de Texto", "Revisão Ortográfica", "Inserir Imagem"],
      answer: 0,
    },
    {
      question: "Na guia Revisão, o que o botão “Comentários” faz?",
      options: ["Insere observações no documento", "Modifica o texto", "Apaga conteúdo", "Formata o texto"],
      answer: 0,
    },
    // Exibir
    {
      question: "Qual modo na guia Exibir mostra o documento como página inteira para revisão?",
      options: ["Leitura em Tela Inteira", "Modo de Edição", "Layout de Impressão", "Modo de Estrutura de Tópicos"],
      answer: 0,
    },
    {
      question: "O que ativa o “Painel de Navegação” na guia Exibir?",
      options: [
        "Mostra miniaturas e pesquisa no documento",
        "Muda a cor da página",
        "Desenha formas",
        "Altera o zoom",
      ],
      answer: 0,
    },
    {
      question: "Qual comando da guia Exibir permite mostrar as linhas da grade no documento?",
      options: ["Linhas de Grade", "Guias", "Zoom", "Painel de Comentários"],
      answer: 0,
    },
  ],

  Excel: [
    // Página Inicial
    {
      question: "Qual comando da guia Página Inicial copia e cola apenas a formatação de uma célula?",
      options: ["Pincel de Formatação", "Colar Especial", "Recortar", "Preencher"],
      answer: 0,
    },
    {
      question: "Na guia Página Inicial, qual botão alinha o conteúdo da célula à direita?",
      options: ["Alinhar à Direita", "Centralizar", "Justificar", "Alinhar à Esquerda"],
      answer: 0,
    },
    {
      question: "Qual botão na guia Página Inicial insere ou remove bordas das células?",
      options: ["Bordas", "Estilos de Célula", "Formatação Condicional", "Mesclar Células"],
      answer: 0,
    },
    // Inserir
    {
      question: "Para inserir um gráfico, qual guia usar no Excel 2016?",
      options: ["Inserir", "Layout da Página", "Dados", "Revisão"],
      answer: 0,
    },
    {
      question: "Qual comando na guia Inserir adiciona uma imagem no Excel?",
      options: ["Imagens", "Formas", "Gráfico", "Tabela Dinâmica"],
      answer: 0,
    },
    {
      question: "Para inserir um comentário em uma célula, qual guia usar?",
      options: ["Inserir", "Revisão", "Dados", "Fórmulas"],
      answer: 1,
    },
    // Desenhar
    {
      question: "Em Excel 2016, a guia Desenhar permite:",
      options: [
        "Criar anotações manuscritas",
        "Inserir fórmulas",
        "Adicionar gráficos",
        "Importar dados",
      ],
      answer: 0,
    },
    {
      question: "Qual ferramenta da guia Desenhar apaga traços feitos com a caneta?",
      options: ["Apagador", "Borracha", "Recortar", "Seleção"],
      answer: 0,
    },
    {
      question: "Qual recurso na guia Desenhar ajuda a escolher cores para desenhos?",
      options: ["Paleta de Cores", "Ferramenta de Seleção", "Grade", "Efeitos Visuais"],
      answer: 0,
    },
    // Design (Layout da Página)
    {
      question: "Para mudar as margens da planilha, qual guia usar?",
      options: ["Layout da Página", "Dados", "Inserir", "Revisão"],
      answer: 0,
    },
    {
      question: "Na guia Layout da Página, qual comando muda a orientação para paisagem?",
      options: ["Orientação", "Margens", "Quebras", "Tamanho"],
      answer: 0,
    },
    {
      question: "Qual recurso da guia Layout da Página ajusta o tamanho do papel para impressão?",
      options: ["Tamanho", "Quebras", "Temas", "Estilos"],
      answer: 0,
    },
    // Referências
    {
      question: "Qual guia no Excel 2016 permite inserir legendas em gráficos?",
      options: ["Referências", "Inserir", "Dados", "Revisão"],
      answer: 0,
    },
    {
      question: "Para criar um índice de conteúdos na planilha, qual recurso usar?",
      options: ["Referências", "Fórmulas", "Dados", "Exibir"],
      answer: 0,
    },
    {
      question: "Na guia Referências, o que faz o comando “Sumário”?",
      options: [
        "Cria um índice automático",
        "Insere um gráfico",
        "Atualiza dados externos",
        "Formata células",
      ],
      answer: 0,
    },
    // Revisão
    {
      question: "Qual comando da guia Revisão permite verificar ortografia no Excel?",
      options: ["Ortografia", "Controlar Alterações", "Comentários", "Proteger Planilha"],
      answer: 0,
    },
    {
      question: "Para proteger uma planilha contra edição, qual guia usar?",
      options: ["Revisão", "Dados", "Exibir", "Inserir"],
      answer: 0,
    },
    {
      question: "Qual recurso na guia Revisão permite inserir comentários em células?",
      options: ["Novo Comentário", "Alterações", "Controle", "Gráfico"],
      answer: 0,
    },
    // Exibir
    {
      question: "Qual opção da guia Exibir mostra a barra de fórmulas no Excel?",
      options: ["Barra de Fórmulas", "Cabeçalho", "Painel de Navegação", "Grade"],
      answer: 0,
    },
    {
      question: "Para congelar linhas ou colunas na planilha, qual guia usar?",
      options: ["Exibir", "Dados", "Inserir", "Revisão"],
      answer: 0,
    },
    {
      question: "Qual opção na guia Exibir ativa a visualização de Layout de Página?",
      options: ["Layout de Página", "Normal", "Visualizar Quebras", "Tela Cheia"],
      answer: 0,
    },
  ],
};

// Função para embaralhar array
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
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answersByTopic, setAnswersByTopic] = useState({ Word: 0, Excel: 0 });
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (topic) {
      // embaralha perguntas e alternativas
      let shuffledQuestions = shuffleArray(allQuestions[topic]).map((q) => {
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
    if (feedback !== null) return; // bloqueia múltiplos cliques até próxima pergunta

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

  if (!topic) {
    return (
      <div className="max-w-xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-6">Escolha o tópico do Quiz</h1>
        <button
          className="m-2 px-6 py-3 bg-blue-600 text-white rounded"
          onClick={() => setTopic("Word")}
        >
          Word 2016
        </button>
        <button
          className="m-2 px-6 py-3 bg-green-600 text-white rounded"
          onClick={() => setTopic("Excel")}
        >
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
                    className={`h-5 rounded ${
                      tpc === "Word" ? "bg-blue-600" : "bg-green-600"
                    }`}
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

  const question = questions[current];

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Quiz: {topic} 2016
      </h1>

      <div className="mb-2 font-semibold">
        Pergunta {current + 1} de {questions.length}
      </div>

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
        <div className="mt-4 text-green-700 font-semibold">
          Resposta correta! 🎉
        </div>
      )}
      {feedback === "wrong" && (
        <div className="mt-4 text-red-700 font-semibold">
          Resposta errada 😞
        </div>
      )}
    </div>
  );
}



