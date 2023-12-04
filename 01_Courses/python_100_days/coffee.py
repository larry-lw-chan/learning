MENU = {
    "espresso": {
        "price": 1.50,
        "water": 50,        
        "coffee": 18,
        "milk": 0,
    },
    "latte": {
        "price": 2.50,
        "water": 200,        
        "coffee": 24,
        "milk": 150,
    },
    "cappucino": {
        "price": 3.00,
        "water": 250,        
        "coffee": 24,
        "milk": 100,        
    },
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
    "money": 0,
}

while True:
    choice = input("What would you like? (espresso/latte/cappuccino): ")
    if choice == 'report':
        print(f"Water: {resources['water']}")
        print(f"Milk: {resources['milk']}")
        print(f"Coffee: {resources['coffee']}")
        print(f"Money: ${resources['money']}")
    else:
        flavor = MENU[choice]

    # Check for resources and reject if not enough
    if flavor["water"] > resources["water"]:
        print("Sorry, there is not enough water")
        continue
    if flavor["milk"] > resources["milk"]:
        print("Sorry, there is not enough milk")
        continue
    if flavor["coffee"] > resources["coffee"]:
        print("Sorry, there is not enough coffee")
        continue
    
    print("Please insert coints.")
    quarters = int(input("How many quarters?: "))
    dimes = int(input("How many dimes?: "))
    nickels = int(input("How many nickels?: "))
    pennies = int(input("How many pennies?: "))

    total = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies + 0.01)

    if total < flavor['price']:
        print("Sorry that's not enough money. Money refunded.")
    else:
        resources['water'] = resources['water'] - flavor['water']
        resources['milk'] = resources['milk'] - flavor['milk']
        resources['coffee'] = resources['coffee'] - flavor['coffee']
        resources['money'] = resources['money'] + flavor['price']
        change = total - flavor['price']
        print(f"Here is ${round(change, 2)} in change.")
        print(f"Here is your {choice}. Enjoy!")