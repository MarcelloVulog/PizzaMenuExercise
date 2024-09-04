import { useEffect, useState } from "react";

// GET 'https://apimocha.com/pizzastore/ingredientsprices'
export function useIngredientsPrices() {
  const [ingredientsPrice, setIngredientsPrice] = useState(null);
  useEffect(() => {
    fetch("https://apimocha.com/pizzastore/ingredientsprices")
      .then((response) => response.json())
      .then((data) => setIngredientsPrice(data));
  }, []);

  return ingredientsPrice;
}

// GET 'https://apimocha.com/pizzastore/menu'
export function useMenu() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetch("https://apimocha.com/pizzastore/menu")
      .then((response) => response.json())
      .then((data) => setMenu(data));
  }, []);

  return menu;
}