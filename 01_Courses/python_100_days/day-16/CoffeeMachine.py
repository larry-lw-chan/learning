class CoffeeMachine:
    def __init__(self):
        self.water = 300
        self.milk = 200
        self.coffee = 100
        self.money = 0
        self.choice = None
        self.MENU = { "espresso": { "price": 1.50, "water": 50, "coffee": 18, "milk": 0 },
                      "latte": { "price": 2.50, "water": 200, "coffee": 24, "milk": 150 },
                      "cappucino": { "price": 3.00, "water": 250, "coffee": 24, "milk": 100 }
                    }

    def print_report(self):
        print(f"Water: {self.water}")
        print(f"Milk: {self.milk}")
        print(f"Coffee: {self.coffee}")
        print(f"Money: ${self.money}")

    def check_resource(self, resource_needed):
        if resource_needed["water"] > self.water:
            print("Sorry, there is not enough water")
            return False
        elif resource_needed["milk"] > self.milk:
            print("Sorry, there is not enough milk")
            return False
        elif resource_needed["coffee"] > self.coffee:
            print("Sorry, there is not enough coffee")
            return False    
        else:
            return True
        
    def process_coin(self):
        print("Please insert coints.")
        quarters = int(input("How many quarters?: "))
        dimes = int(input("How many dimes?: "))
        nickels = int(input("How many nickels?: "))
        pennies = int(input("How many pennies?: "))
        money_inserted = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01)
        return money_inserted
        

    def check_transaction(self, money_inserted, resource_needs):
        if money_inserted < resource_needs['price']:
            print("Sorry that's not enough money. Money refunded.")
            return False
        else:
            self.water -= resource_needs['water']
            self.milk -= resource_needs['milk']
            self.coffee -= resource_needs['coffee']
            self.money += resource_needs['price']
            return True
            
    def getDrink():
        pass

    def main(self):
        while True:
            choice = input("What would you like? (espresso/latte/cappucino): ")
            if choice == 'report':
                self.print_report()
                continue
            else:
                resource_needs = self.MENU[choice]
                # End Process if not enough resources
                if self.check_resource(resource_needs) == False:
                    continue
                # End Process if not enough resources
                money_inserted = self.process_coin()
                if self.check_transaction(money_inserted, resource_needs) == True:
                    change = money_inserted - resource_needs['price']
                    print(f"Here is ${round(change, 2)} in change.")
                    print(f"Here is your {choice}. Enjoy!")

# Initialize Class
coffee_machine = CoffeeMachine()
coffee_machine.main()