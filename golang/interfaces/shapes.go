package main

import "fmt"

type Triangle struct {
	height float64
	base float64
}

type Square struct {
	sideLength float64
}

func (s Square) getArea() float64 {
	return s.sideLength * s.sideLength
}

func (t Triangle) getArea() float64 {
	return 0.5 * t.base * t.height
}

type Shape interface {
	getArea() float64
}

func printArea(s Shape) {
	fmt.Println(s.getArea())
}


func shape() {
	t := Triangle{height: 10.0, base: 10.0}
	s := Square{sideLength: 10.0}

	printArea(s)
	printArea(t)
}