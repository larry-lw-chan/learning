from turtle import Turtle

COR_X = 0
COR_Y = -280

class Player(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("turtle")
        self.setheading(90)
        self.shapesize(stretch_wid=1, stretch_len=1)
        self.penup()
        self.reset()

    def up(self):
        self.sety(self.ycor() + 20)

    def down(self):
        self.sety(self.ycor() - 20)

    def reset(self):
        self.goto(COR_X, COR_Y)