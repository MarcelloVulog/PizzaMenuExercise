import "./App.css";
import Header from "./Header";
import { useIngredientsPrices, useMenu } from "./customHooks";
const basePrice = 5;

export default function App() {
  const menu = useMenu();
  const ingredientsPrices = useIngredientsPrices();
  console.log("menu", menu);
  console.log("ingredients prices", ingredientsPrices);
  console.log("base price", basePrice);

  return (
    <div className="App">
      <Header title="Marcello's Pizza House" />
      <h2>Our Pizza Menu</h2>
      <div style={{ padding: 10, border: "1px dashed black" }}>
        Pizza menu goes here
      </div>
    </div>
  );
}