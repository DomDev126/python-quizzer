import json


def validate_json(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)

            assert len(data) == 4

            for category, questions in data.items():
                for question in questions:

                    try:
                        assert category == question["difficulty"]
                        assert "question" in question
                        assert "codeSnippet" in question
                        assert "options" in question
                        assert "correctAnswer" in question
                        assert "explanation" in question

                        for letter in "abcdef":
                            assert letter in question["options"]

                        assert question["correctAnswer"] in question["options"]
                    except AssertionError as err:
                        raise Exception(
                            f"Invalid question data: {err}\n{question}")

        print("JSON is valid")

    except json.JSONDecodeError as err:
        raise Exception(f"JSON file is invalid: {err}")


if __name__ == "__main__":
    validate_json("data/questions.json")
