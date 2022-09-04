import React from "react";
import { FoodData } from "../components/FoodData";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1>SUSHI FOOD</h1>
      <div className="menu-container">
        {FoodData.map((item, index) => {
          return (
            <div className={item.Cname} key={index}>
              <img src={item.img} alt={"menu-img"} />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
