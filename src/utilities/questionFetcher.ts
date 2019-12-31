import questionsData from '../../data/questions.json';

type QuestionData = {
  difficulty: string;
  question: string;
  codeSnippet: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
  };
  correctAnswer: string;
  explanation: string;
};

type QuestionsDataStructure = {
  beginner: QuestionData[];
  medium: QuestionData[];
  hard: QuestionData[];
  expert: QuestionData[];
};

export const questionFetcher = (): QuestionData[] => {
  const selectedQuestions: QuestionData[] = [];
  const questionsDataTyped = questionsData as QuestionsDataStructure;

  const difficulties: (keyof QuestionsDataStructure)[] = ['beginner', 'medium', 'hard', 'expert'];

  difficulties.forEach(difficulty => {
    const questions = questionsDataTyped[difficulty];
    for (let i = 0; i < 5; i++) {
      if (questions.length === 0) break;

      const randomIndex = Math.floor(Math.random() * questions.length);
      selectedQuestions.push(questions[randomIndex]);

      questions.splice(randomIndex, 1);
    }
  });

  return selectedQuestions;
};

export default questionFetcher;

