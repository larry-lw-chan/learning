import React from "react";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photo="pizzas/spinaci.jpg"
        price={10.0}
      />
    </main>
  );
}

function Pizza(props) {
  const { name, ingredient, photo, price } = props;
  return (
    <div>
      <img src={photo} alt="spinaci" />
      <h3>{name}</h3>
      <p>{ingredient}</p>
      <span>{price}</span>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  const message = isOpen
    ? "Sorry, we're currently closed"
    : "We're open! Come on in!";

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} {message}
    </footer>
  );
}

export { App, Pizza };
