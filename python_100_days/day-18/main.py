from turtle import Turtle
import random

COLORS = ['cornflower blue', 'green', 'gold', 'dark orange', 'purple', 'indigo']

def make_turtle() -> Turtle:
    t = Turtle()
    t.shape('turtle')
    t.color('green')
    t.screen.colormode(255)    
    return t

def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    return (r, g, b)

# Quiz 1
def square():    
    t = make_turtle()
    for _ in range(4):
        t.forward(100)
        t.left(90)
    t.screen.exitonclick()
    

# Quiz 2: Dashed line
def dashed_line():
    t = make_turtle()
    for _ in range(15):
        t.forward(10)
        t.penup()
        t.forward(10)
        t.pendown()
    t.screen.exitonclick()
    
# Quiz 3: Draw Different Shapes
def different_shapes():
    t = make_turtle()
    def shape_gen(num_of_corners):
        t.color(random.choice(COLORS))
        for _ in range(num_of_corners):
            t.right(360/num_of_corners)
            t.forward(100)    
    # Use Method            
    shape_gen(3)
    shape_gen(4)
    shape_gen(5)
    shape_gen(6)
    shape_gen(7)
    shape_gen(8)
    shape_gen(9)
    shape_gen(10)
    t.screen.exitonclick()

# Quiz 4: Draw Random Walk
def random_walk():
    t = make_turtle()
    t.pensize(10)
    t.speed(10)
    
    playing = True
    while playing:
        t.color(random_color())
        direction = random.randint(1,4)
        if direction == 1:
            t.right(90)
        elif direction == 2:
            t.right(180)
        elif direction == 3:
            t.left(90)
        else:
            t.left(180)                                    
        t.forward(50)


# Quiz 5: Draw Spirograph
def draw_spirograph():
    t = make_turtle()
    t.speed(25)
    for _ in range(0, 72):
        t.color(random_color())
        t.circle(100)
        t.left(5)
    t.screen.exitonclick()


# Quiz 6: Draw Artwork
def draw_art():
    t = make_turtle()
    t.speed(25)
    
    def draw_circles(x, y):
        for i in range(y):
            t.penup()
            t.home()
            t.setpos(-250, (i * 50) - 250)
            t.pendown()
            for _ in range(x):
                t.color(random_color())
                t.begin_fill()
                t.circle(20)
                t.end_fill()
                t.penup()
                t.forward(50)
                t.pendown()

    draw_circles(10, 10)
    t.screen.exitonclick()

# execution 
def main():
    selection = input("Select 1 or 2 or 3 or 4 or 5 or 6: ")
    if selection == '1':
        square()
    elif selection == '2':
        dashed_line()
    elif selection == '3':
        different_shapes()   
    elif selection == '4':
        random_walk()                
    elif selection == '5':
        draw_spirograph() 
    elif selection == '6':
        draw_art()                             
    else:
        print('wrong input')

main()


