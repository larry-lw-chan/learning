package main

import "fmt"

type Person struct {
	firstName string;
	lastName string;
	age int;
}

func main() {
	// person := Person{
	// 	firstName: "Alex",
	// 	lastName: "Anderson",
	// 	age: 20,
	// }
	// fmt.Printf("%s %s %d\n", person.firstName, person.lastName, person.age)
	// var colors = make(map[string]string)
	// colors["red"] = "#ff0000"
	// colors["green"] = "#00ff00";
	// colors["blue"] = "#0000ff";
	// delete(colors, "blue")
	// fmt.Printf("%s, %s, %s\n", colors["red"], colors["green"], colors["blue"])
	
	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#00ff00",
		"blue":  "#0000ff",
	}
	printMap(colors)
}

func printMap(c map[string]string) {
	for key, value := range c {
		fmt.Printf("%s: %s\n", key, value)
	}
}



