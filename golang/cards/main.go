package main

func main() {
	// cards := newDeck()
	cards := newDeckFromFile("my_cards.txt")
	cards.shuffle()
	hand, remainingCards := deal(cards, 5)

	hand.print()
	remainingCards.print()
	cards.saveToFile("my_cards.txt")
}
