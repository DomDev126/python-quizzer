import questionsData from '../../data/questions.json';

type QuestionData = {
  difficulty: string;
  question: string;
  codeSnippet: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  explanation: string;
};

type FormattedQuestionData = {
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
  correctAnswer: keyof FormattedQuestionData['options'];
  explanation: string;
};

type QuestionsDataStructure = {
  beginner: QuestionData[];
  medium: QuestionData[];
  hard: QuestionData[];
  expert: QuestionData[];
};

const shuffleAnswers = (correctAnswer: string, incorrectAnswers: string[]): FormattedQuestionData['options'] => {
  const allAnswers = [correctAnswer, ...incorrectAnswers];
  for (let i = allAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
  }

  const options: FormattedQuestionData['options'] = {
    a: allAnswers[0],
    b: allAnswers[1],
    c: allAnswers[2],
    d: allAnswers[3],
    e: allAnswers[4],
    f: allAnswers[5]
  };

  return options;
};

const getCorrectAnswerKey = (options: FormattedQuestionData['options'], correctAnswer: string): keyof FormattedQuestionData['options'] => {
  return (Object.keys(options).find(key => options[key as keyof FormattedQuestionData['options']] === correctAnswer) as keyof FormattedQuestionData['options']) || 'a';
};

export const questionFetcher = (): FormattedQuestionData[] => {
  const selectedQuestions: FormattedQuestionData[] = [];
  const questionsDataTyped = JSON.parse(JSON.stringify(questionsData)) as QuestionsDataStructure;

  const difficulties: (keyof QuestionsDataStructure)[] = ['beginner', 'medium', 'hard', 'expert'];

  difficulties.forEach(difficulty => {
    const questions = questionsDataTyped[difficulty];
    for (let i = 0; i < 5; i++) {
      if (questions.length === 0) break;

      const randomIndex = Math.floor(Math.random() * questions.length);
      const question = questions[randomIndex];

      const options = shuffleAnswers(question.correctAnswer, question.incorrectAnswers);
      const correctAnswerKey = getCorrectAnswerKey(options, question.correctAnswer);

      selectedQuestions.push({
        difficulty: question.difficulty,
        question: question.question,
        codeSnippet: question.codeSnippet,
        options: options,
        correctAnswer: correctAnswerKey,
        explanation: question.explanation
      });

      questions.splice(randomIndex, 1);
    }
  });

  return selectedQuestions;
};

export const getTotalNumberOfQuestions = (): number => {
  const questionsDataTyped = JSON.parse(JSON.stringify(questionsData)) as QuestionsDataStructure;
  let totalQuestions = 0;

  const keys = Object.keys(questionsDataTyped) as Array<keyof QuestionsDataStructure>;
  keys.forEach(key => {
    totalQuestions += questionsDataTyped[key].length;
  });

  return totalQuestions;
};


