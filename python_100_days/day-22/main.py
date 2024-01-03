from turtle import Turtle, Screen
import time
from paddle import Paddle
from ball import Ball
from scoreboard import Scoreboard

def main():
    # Initialize the screen
    screen = Screen()
    screen.setup(width=800, height=600)
    screen.bgcolor("black")
    screen.title("Pong")
    screen.tracer(0)

    # Create Paddle objects
    l_paddle = Paddle(-350, 0)
    r_paddle = Paddle(350, 0)

    # Create the ball
    ball = Ball()    

    # Create Scoreboard
    scoreboard = Scoreboard()

    # Listen for key presses
    screen.listen()
    screen.onkey(l_paddle.up, "w")
    screen.onkey(l_paddle.down, "s")
    screen.onkey(r_paddle.up, "Up")
    screen.onkey(r_paddle.down, "Down")
        
    game_is_on = True
    while game_is_on:
        time.sleep(0.05)
        screen.update()
        ball.move()

        # Detect collision with wall
        if ball.ycor() > 280 or ball.ycor() < -280:
            ball.bounce_y()

        # Detect collision with paddle
        if ball.distance(r_paddle) < 50 and ball.xcor() > 320:
            ball.bounce_x()

        if ball.distance(l_paddle) < 50 and ball.xcor() < -320:
            ball.bounce_x()

        # Detect when ball out of bounds
        if ball.xcor() > 380:
            ball.reset_position()
            scoreboard.l_point()

        if ball.xcor() < -380:
            ball.reset_position()
            scoreboard.r_point()
               
    # Keep the screen open until it is manually closed
    screen.exitonclick()

main()
