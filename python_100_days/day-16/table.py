from prettytable import PrettyTable

table = PrettyTable()
table.field_names = ["Pokemon", 'Type']
table.add_row(["Pikachu", "Electric"])
table.add_row(["Squirtie", "Water"])
table.add_row(["Charmander", "Fire"])
table.align = "l"
print(table)

table2 = PrettyTable()
table2.add_column("Pokemon Name", ["Pikachu", "Squirtie", "Charmander"])
table2.add_column("Type", ["Electric", "Water", "Fire"])
table2.align = "l"
print(table2)