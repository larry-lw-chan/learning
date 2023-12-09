class QuizBrain:
    def __init__(self, q_list) -> None:
        self.question_number = 0
        self.question_list = q_list
        self.score = 0

    def next_question(self) -> None:
        current_question = self.question_list[self.question_number]
        self.question_number += 1
        user_answer = input(f"{ self.question_number }: { current_question.text }  (True/False)?: ")
        self.check_answer(user_answer, current_question.answer)

    def still_has_question(self) -> bool:
        return self.question_number < len(self.question_list)
    
    def check_answer(self, user_answer, correct_answer):
        if user_answer.lower() == correct_answer.lower():
            self.score += 1
            print("You got it right!")
        else:
            print("You got it wrong!")
        print(f"The correct answer was: {correct_answer}")    
        print(f"Your current score is: { self.score } / { len(self.question_list) }")

    def print_final_score(self):
        print("You've completed the quiz")
        print(f"You're final score was { self.score } / { len(self.question_list) }")