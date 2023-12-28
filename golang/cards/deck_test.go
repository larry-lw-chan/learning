package main

import (
	"os"
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()

	if len(d) != 52 {
		t.Errorf("Expected 52 cards, but got %v", len(d))
	}

	if d[0] != "Ace of Spades" {
		t.Errorf("Expected 'Ace of Spades', but got %v", d[0])
	}
}

func TestSaveToDeck(t *testing.T) {
	os.Remove("_decktesting.txt")

	d := newDeck()
	d.saveToFile("_decktesting.txt")

	loadedDeck := newDeckFromFile("_decktesting.txt")

	if len(loadedDeck) != 52 {
		t.Errorf("Expected 52 cards, but got %v", len(loadedDeck))
	}

	os.Remove("_decktesting.txt")
}
