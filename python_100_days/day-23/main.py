from turtle import Screen
import time
from level import Level
from player import Player
from car import Car
from car_manager import CarManager

# Initialize Screen
screen = Screen()
screen.setup(width=800, height=600)
screen.colormode(255)
screen.bgcolor("white")
screen.title("Turtle Crossing")
screen.tracer(0)

# Initialize Levelboard
level = Level()

# Player
player = Player()

# Car Manager
car_manager = CarManager()

# Listen for keypresses
screen.listen()
screen.onkey(player.up, "Up")
screen.onkey(player.down, "Down")

# Start the game
game_is_on = True

while game_is_on:
    car_manager.render()
    # Reset when player reach top  
    if player.ycor() > 280:
        player.reset()
        level.level_up()
        car_manager.increase_speed()

    # Detect collision with car
    isCollision = car_manager.detect_collision(player)
    if isCollision:
        level.game_over()
        game_is_on = False

    time.sleep(0.05)
    screen.update()

# Keep the screen open until it is manually closed
screen.exitonclick()