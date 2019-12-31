# Python Quizzer - A Learning Game for Python Beginners

Welcome to the Python Quizzer! This interactive quiz game is designed to help beginners learn Python in a fun and engaging way. By answering a series of 20 random Python questions that increase in difficulty, users can test their knowledge and gradually improve their understanding of the Python programming language.

### Features

20 Random Python Questions: Each playthrough presents a different set of questions, ranging from basic to more challenging concepts.
Progressive Difficulty: Questions get more difficult as you advance, providing a balanced learning curve.
Built with TypeScript and React: Developed using TypeScript to enhance code quality and scalability, along with React for a responsive and dynamic user experience.

### Live Demo

Try the Python Quizzer now: <a href="https://alexandengstrom.github.io/python-quizzer/"> Python Quizzer</a>

### Contributing

Contributions are welcome! If you have a great idea for a question or an improvement, feel free to submit a pull request. Here's how you can contribute:

#### Adding Questions

1. **Fork the repository**: Start by forking the repository to make your changes.
2. **Create questions**: Add your questions to the JSON file in the format specified below. Make sure your questions are appropriately categorized by difficulty and provide a clear, concise explanation.

#### JSON format and validation

Each question must adhere to the following format in the data/questions.json file:

- Difficulty categorization matching the question's difficulty level (beginnner, medium, hard, expert).
- A clear question statement.
- A code snippet.
- Multiple choice options labeled from 'a' to 'f'.
- The correct answer indicated.
- A brief explanation of the answer.

Here is an example of a well-formatted question:

```
{
  "difficulty": "beginner",
  "question": "What will be the output of the following Python code?",
  "codeSnippet": "list1 = [1, 2, 3]\nlist2 = list1\nlist2[0] = 4\nprint(list1)",
  "options": {
    "a": "[1, 2, 3]",
    "b": "[4, 2, 3]",
    "c": "Error",
    "d": "[1, 4, 3]",
    "e": "None",
    "f": "[4, 4, 4]"
  },
  "correctAnswer": "b",
  "explanation": "In this code, 'list2' is not a copy of 'list1', but rather a reference to the same list object. Therefore, modifying 'list2' also changes 'list1'. The output will be '[4, 2, 3]'."
}
```

My automated test script runs on every pull request to ensure the JSON file's integrity and format. Your submission must pass this test to be considered for merging.
