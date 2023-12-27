package main

import (
	"html/template"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	// Parse template files
	tmpl := template.Must(template.ParseFiles("templates/layout.html", "templates/pages/index.html"))

	data := struct {
		Title string
		Name  string
	}{
		Title: "Welcome to My Website",
		Name:  "John Doe",
	}

	err := tmpl.Execute(w, data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
