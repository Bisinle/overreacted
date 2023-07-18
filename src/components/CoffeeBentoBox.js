import React from "react";
import { useState, useEffect } from "react";

function CoffeeBentoBox({ minutes }) {
  // let minutesNumber = parseInt(minutes)
  const [count, setCount] = useState(0);
  const [coffeeCups, setCoffeeCups] = useState([]);
  useEffect(() => {
    if (minutes < 30) {
      let coffeCount = Math.ceil(minutes / 5);
      for (let i = 0; i < coffeCount; i++) {
        setCoffeeCups((prevState) => {
          return [
            ...prevState,
            <i key={i} className="fa-sharp fa-solid fa-mug-hot"></i>,
          ];
        });

        // array.push('@')
      }
    } else if (minutes >= 30) {
      let bentosBox = Math.ceil(minutes / 10);
      console.log(bentosBox);
      for (let i = 0; i < bentosBox; i++) {
        setCoffeeCups((prevState) => {
          return [...prevState, <i class="fa-sharp fa-solid fa-star"></i>];
        });
      }
    }
  }, []);

  // console.log(coffeeCups);

  return <span>{coffeeCups}</span>;
}

export default CoffeeBentoBox;
