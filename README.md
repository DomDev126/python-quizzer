# Python Quizzer - A Learning Game for Python Beginners

Welcome to the Python Quizzer! This interactive quiz game is designed to help beginners learn Python in a fun and engaging way. By answering a series of 20 random Python questions that increase in difficulty, users can test their knowledge and gradually improve their understanding of the Python programming language.

Try the [Python Quizzer](https://alexandengstrom.github.io/python-quizzer/) now!

## Contributing

Contributions are welcome! If you have a great idea for a question or an improvement, feel free to submit a pull request. Here's how you can contribute:

### Adding Questions

1. **Fork the repository**: Start by forking the repository to make your changes.
2. **Create questions**: Add your questions to the JSON file in the format specified below. Make sure your questions are appropriately categorized by difficulty and provide a clear, concise explanation.

#### JSON format and validation

Each question must adhere to the following format in the data/questions.json file:

- Difficulty categorization matching the question's difficulty level (beginner, medium, hard, expert).
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

Make sure your Python code snippet doesn't break the JSON syntax. For example, you need to escape double quote characters or use single quote characters.

My automated test script runs on every pull request to ensure the JSON file's integrity and format. Your submission must pass this test to be considered for merging.

### User interace

If you're interested in improving the design and usability of the quiz game, that's awesome! This is a casual hobby project, so any help is welcome. Whether you're familiar with React and TypeScript or have ideas to make it look and work better, feel free to get involved. You can make the game easier to use, add cool features, or simply make it more user-friendly. Just fork the repository, make your changes, and send a pull request with your improvements. Your contributions will make this project even better!
