import json


def validate_json(file_path):
    question_count = {}

    try:
        with open(file_path, 'r') as file:
            data = json.load(file)

            assert len(data) == 4

            for category, questions in data.items():
                question_count[category] = 0

                for question in questions:
                    question_count[category] += 1

                    try:
                        assert category == question["difficulty"], "Question have incorrect category"
                        assert "question" in question, "The question doesnt have the key 'question'"
                        assert "codeSnippet" in question, "The question doesnt have the key 'codeSnippet'"
                        assert "explanation" in question, "The question doesnt have the key 'explanation'"
                        assert "correctAnswer" in question, "The question doesnt have the key 'correctAnswer'"
                        assert "incorrectAnswers" in question, "The question doesnt have the key 'incorrectAnswers'"
                        assert len(
                            question["incorrectAnswers"]) == 5, "The question doesnt have five incorrect options"
                        assert question["correctAnswer"] not in question[
                            "incorrectAnswers"], "The correct answer is also one of the incorrect options"
                        assert len(set(question["incorrectAnswers"])) == len(
                            question["incorrectAnswers"]), "There is a duplicate incorrect answer"

                    except AssertionError as err:
                        raise Exception(
                            f"\n\nInvalid question data: {err}\n{question}")

        print("JSON is valid!")
        total_questions = 0
        for category, count in question_count.items():
            print(f"{category.title()}: {count} questions.")
            total_questions += count

        print(f"Total: {total_questions} questions")

    except json.JSONDecodeError as err:
        raise Exception(f"JSON file is invalid: {err}")


if __name__ == "__main__":
    validate_json("data/questions.json")
