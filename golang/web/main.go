package main

import (
	"fmt"
	"net/http"
)

// Example Middleware
func logging(f http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Print("Logging")
		f(w, r)
	}
}

func main() {
	// Serve static files
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Insert all routes here
	http.HandleFunc("/", logging(home))

	// Activate Server
	http.ListenAndServe(":8080", nil)
}
