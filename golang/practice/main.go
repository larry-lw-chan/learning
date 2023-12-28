package main

func main() {
	var numList []int

	for i := 0; i <= 10; i++ {
		numList = append(numList, i)
	}

	for _, number := range numList {
		if number%2 == 0 {
			println(number, "is even")
		} else {
			println(number, "is odd")
		}
	}
}
