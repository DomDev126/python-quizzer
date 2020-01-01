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

const shuffleOptions = (options: QuestionData['options'], correctAnswer: keyof QuestionData['options']) => {
  let optionKeys = Object.keys(options) as (keyof QuestionData['options'])[];
  let optionValues = Object.values(options);
  
  for (let i = optionValues.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [optionValues[i], optionValues[j]] = [optionValues[j], optionValues[i]];
  }

  let newOptions = {} as QuestionData['options'];
  let newCorrectAnswer = correctAnswer;

  optionKeys.forEach((key, index) => {
    newOptions[key] = optionValues[index];
    if (options[correctAnswer] === optionValues[index]) {
      newCorrectAnswer = key;
    }
  });

  return { newOptions, newCorrectAnswer };
};

export const questionFetcher = (): QuestionData[] => {
  const selectedQuestions: QuestionData[] = [];
  const questionsDataTyped = JSON.parse(JSON.stringify(questionsData)) as QuestionsDataStructure;

  const difficulties: (keyof QuestionsDataStructure)[] = ['beginner', 'medium', 'hard', 'expert'];

  difficulties.forEach(difficulty => {
    const questions = questionsDataTyped[difficulty];
    for (let i = 0; i < 5; i++) {
      if (questions.length === 0) break;

      const randomIndex = Math.floor(Math.random() * questions.length);
      const question = questions[randomIndex];

      const { newOptions, newCorrectAnswer } = shuffleOptions(question.options, question.correctAnswer as keyof QuestionData['options']);

      selectedQuestions.push({
        ...question,
        options: newOptions,
        correctAnswer: newCorrectAnswer
      });

      questions.splice(randomIndex, 1);
    }
  });

  return selectedQuestions;
};

export default questionFetcher;

