from turtle import Turtle

ALIGNMENT = "center"
FONT = ("Courier", 24, "normal")

class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.score = 0
        self.high_score = self.open_highscore()
        self.shape("blank")  # Set shape to nothing
        self.penup()
        self.goto(0, 270)
        self.color("white")
        self.update_scoreboard()

    def open_highscore(self):
        with open("data.txt") as file:
            return int(file.read())
        
    def write_highscore(self, score):
        with open("data.txt", mode="w") as file:
            file.write(str(score))

    def update_scoreboard(self):
        self.clear()
        self.write(f"Score: {self.score} High Score: {self.high_score}", align=ALIGNMENT, font=FONT)
        
    def increase_score(self):
        self.score += 1
        self.update_scoreboard()
    
    def game_over(self):
        self.goto(0, 0)
        self.clear()
        self.write("GAME OVER", align=ALIGNMENT, font=FONT)

    def reset(self):
        if self.score > self.high_score:
            self.write_highscore(self.score)
            self.high_score = self.score
        self.score = 0
        self.update_scoreboard()