#TODO: Create a letter using starting_letter.txt 
#for each name in invited_names.txt
#Replace the [name] placeholder with the actual name.
#Save the letters in the folder "ReadyToSend".
    
#Hint1: This method will help you: 
#https://www.w3schools.com/python/ref_file_readlines.asp

#Hint2: This method will also help you: 
#https://www.w3schools.com/python/ref_string_replace.asp

#Hint3: THis method will help you: 
#https://www.w3schools.com/python/ref_string_strip.asp

PLACEHOLDER = "[name]"

with open("./Input/Names/invited_names.txt") as file:
    names_list = file.readlines()

with open("./Input/Letters/starting_letter.txt") as file:
    letter_template = file.read()
    for name in names_list:
        stripped_name = name.strip()
        print(stripped_name)
        new_letter = letter_template.replace(PLACEHOLDER, stripped_name)
        file = open(f"./Output/ReadyToSend/letter_for_{stripped_name}.txt", mode="w")
        file.write(new_letter)
        file.close()