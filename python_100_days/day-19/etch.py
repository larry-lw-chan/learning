from turtle import Turtle, Screen

t = Turtle()
t.speed(10)

def forward():
    t.forward(10)

def backward():
    t.backward(10)

def clockwise():
    t.right(10)

def counter_clockwise():
    t.left(10)

def clear():
    t.clear()
    t.reset()
    t.home()



# Event Listener for turtle graphcis
s = Screen()
s.listen()
s.onkey(forward, "w")
s.onkey(backward, "s")
s.onkey(counter_clockwise, "a")
s.onkey(clockwise, "d")
s.onkey(clear, "c")

s.exitonclick()
