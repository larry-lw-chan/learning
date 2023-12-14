from turtle import Turtle, Screen

t = Turtle()
t.speed(25)


def left():
    t.setheading(180)
    t.forward(100)

def up():
    t.setheading(90)
    t.forward(100)

def down():
    t.setheading(270)
    t.forward(100)

def right():
    t.setheading(0)
    t.forward(100)        


# Event Listener for turtle graphcis
s = Screen()
s.listen()
s.onkey(up, "Up")
s.onkey(down, "Down")
s.onkey(left, "Left")
s.onkey(right, "Right")
s.exitonclick()
