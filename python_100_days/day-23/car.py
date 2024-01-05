from turtle import Turtle
import random

class Car(Turtle):
    def __init__(self, base_speed=10):
        super().__init__()
        self.shape("square")
        self.shapesize(stretch_wid=1, stretch_len=2)
        self.penup()
        self.setheading(180)
        self.random_start_pos()
        self.color(self.random_color())
        self.speed = base_speed * self.speed_deviation()

    def random_start_pos(self):
        y_position = random.randint(-250, 250)
        self.goto(360, y_position)

    def random_color(self):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        return (r, g, b)
    
    def speed_deviation(self):
        return random.uniform(0.8, 1.2)

    def move(self):
        self.forward(self.speed)

    def increase_speed(self):
        self.speed *= 1.1