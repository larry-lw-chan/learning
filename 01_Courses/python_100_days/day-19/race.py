from turtle import Turtle, Screen
import random

# Screen Setup
s = Screen()
s.setup(width=500, height=400)

colors = ["red", "orange", "yellow", "green", "blue", "purple"]
y_positions = [-70, -40, -10, 20, 50, 80]
all_turtles = []

for idx in range(0, 6):
    new_turtle = Turtle(shape="turtle")
    new_turtle.color(colors[idx])
    new_turtle.penup()
    new_turtle.goto(x=-230, y=y_positions[idx])
    all_turtles.append(new_turtle)

user_bet = s.textinput(title="Make your bet", prompt='red, orange, yellow, green, blue, purple')

if user_bet:
    is_race_on = True

while is_race_on:
    for turtle in all_turtles:
        rand_distance = random.randint(0, 10)
        turtle.forward(rand_distance)
        if turtle.position()[0] > 220:
            is_race_on = False
            if user_bet.lower() == turtle.color()[0].lower():
                player_status = "win"
            else:
                player_status = "lose"
            # Determine winner and stop all turtles
            print(f"You {player_status}. The {turtle.color()[0]} turtle won the race")
            
# Event Listener for turtle graphcis
s.listen()
s.exitonclick()
