package main

import "fmt"

type contactInfo struct {
	email   string
	zipcode int
}

type person struct {
	firstName string
	lastName  string
	age       int
	contactInfo
}

func main() {
	jim := person{
		firstName: "Jim",
		lastName:  "Doe",
		age:       25,
		contactInfo: contactInfo{
			email:   "john@gmail.com",
			zipcode: 32300,
		},
	}

	jim.updateName("Jane")
	jim.print()
}

func (pointerToPerson *person) updateName(newFirstName string) {
	(*pointerToPerson).firstName = newFirstName
}

func (p person) print() {
	fmt.Printf("%+v\n", p)
}
