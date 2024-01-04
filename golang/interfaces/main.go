package main

import (
	"io"
	"log"
	"os"
)

func main() {
	arg := os.Args[1]
	
	file, err := os.Open(arg) // For read access.
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	
	// data := make([]byte, 100)
	// count, err := file.Read(data)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// fmt.Printf("read %d bytes: %q\n", count, data[:count])
	io.Copy(os.Stdout, file)
}