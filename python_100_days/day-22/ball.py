from turtle import Turtle

class Ball(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.color("white")
        self.penup()
        self.setpos(0, 0)
        self.shapesize(stretch_wid=1, stretch_len=1)
        self.x_move = 10
        self.y_move = 10

    def move(self):
        x_pos = self.xcor() + self.x_move
        y_pos = self.ycor() + self.y_move
        self.goto(x_pos, y_pos)

    def bounce_x(self):
        self.x_move *= -1
        self.increase_speed()
    
    def bounce_y(self):
        self.y_move *= -1

    def reset_position(self):
        self.x_move *= -1
        self.y_move *= -1
        self.goto(0, 0)
        self.reset_speed()

    def increase_speed(self):
        self.x_move *= 1.1
        self.y_move *= 1.1

    def reset_speed(self):
        self.x_move = 10
        self.y_move = 10

    