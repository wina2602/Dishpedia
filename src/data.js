import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import "./style_one.css";

const app_id = "69f288e3";
const api_key = "6d36a4d396bb0ee5a64086a4e71654d3";

const Data = () => {
  const [recipe, setRecipe] = useState("");
  const [click, setClick] = useState(0);
  const [food, setFood] = useState([]);
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${app_id}&app_key=${api_key}`;
  const handelAsync = async () => {
    console.log(url);
    const res = await fetch(url);
    console.log(url);
    const data = await res.json();
    setFood(data.hits);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setClick(1 ^ click);
  };
  useEffect(() => {
    handelAsync();
  }, [click]);
  return (
    <>
      <form className="form1" onSubmit={handelSubmit}>
        <input
          type="text"
          className="inp1"
          placeholder="enter any food item you crave for"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
        <button type="submit" className="btn1">
          search
        </button>
      </form>
      <div className="containermain">
        {food.map((item, index) => {
          return (
            <FoodCard
              key={index}
              imgad={(item.recipe.image)}
              dishName={item.recipe.label}
              recipe={item.recipe.ingredientLines}
              nutrients = {item.recipe.totalNutrients}
            />
          );
        })}
      </div>
    </>
  );
};

export default Data;
