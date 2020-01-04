# Python Quizzer

Welcome to the Python Quiz Game - an interactive way to test and improve your Python skills! This project is built using TypeScript and React, offering a platform to tackle Python questions of varying difficulty.

The Python Quiz Game presents users with 20 random Python questions, each featuring a code snippet, a question, and six possible answers. After responding to a question, the game displays an explanation of the code.

Try the <a href="https://alexandengstrom.github.io/python-quizzer/">Python Quizzer!</a>

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**: Clone this repo to your local machine using:

```
git clone git@github.com:alexandengstrom/python-quizzer.git
```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies with npm install.

```
npm install
```

3. **Run the Project:** Start the project using npm run dev. This will launch the game in your default browser.

```
npm run dev
```

## Contributing

Contributions are encouraged, especially from those looking to make their first pull request. Here's how you can add your own questions or contribute in other ways.

To contribute, start by forking the repository. This creates a copy of the project in your GitHub account, allowing you to make changes without affecting the original project.

### Adding Questions

1. **JSON File**: Questions are stored in **data/questions.json**. The file structure is:

```
{
  "beginner": [],
  "medium": [],
  "hard": [],
  "expert": []
}
```

2. **Question Format**: Add new questions using this format, ensuring JSON validity:

```
{
    "difficulty": "beginner",
    "question": "What will be the output of the following Python code?",
    "codeSnippet": "list1 = [1, 2, 3]\nlist2 = list1\nlist2[0] = 4\nprint(list1)",
    "explanation": "In this code, 'list2' is not a copy of 'list1', but a reference to the same list object. Modifying 'list2' changes 'list1'. The output is '[4, 2, 3]'.",
    "correctAnswer": "[4, 2, 3]",
    "incorrectAnswers": [
        "[1, 2, 3]",
        "Error",
        "[1, 4, 3]",
        "None",
        "[4, 4, 4]"
    ]
}
```

3. **Validation**: Run **scripts/validate_json.py** to check the format of your JSON file before submitting a pull request. This script will also run automatically for every pull request so make sure your submission passes this test.

### Design Improvements

If you're skilled in TypeScript and React, feel free to improve the design and the user interface of the game.
