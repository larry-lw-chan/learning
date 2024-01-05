from car import Car
import random

class CarManager():
    def __init__(self):
        self.cars = []
        self.overall_speed = 10

    def render(self):
        self.createCar()
        self.moveCars()
        self.removeOffScreenCars()

    def detect_collision(self, player):
        for car in self.cars:
            if car.distance(player) < 20:
                return True
        return False    

    def createCar(self):
        randomizer = random.randint(1, 6)
        if randomizer == 1:
            car = Car(self.overall_speed)
            self.cars.append(car)

    def moveCars(self):
        for car in self.cars:
            car.move()

    def removeOffScreenCars(self):
        for car in self.cars:
            if car.xcor() < -380:
                car.hideturtle()
                self.cars.remove(car)

    def increase_speed(self):
        self.overall_speed *= 1.1
        for car in self.cars:
            car.increase_speed()