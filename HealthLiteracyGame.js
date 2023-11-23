import React, { useRef, useEffect, useState } from "react";
import HappyKid from "../images/happy.jpg"
import ThinkingKid from "../images/thinking.jpg"
import CryingKid from "../images/crying.jpg"

import "./HealthLiteracyGame.css";

export default function HealthLiteracyGame() {
  const graph = useRef(null);
  const [imgurl, setImgurl] = useState(ThinkingKid)
  const [details, setDetails] = useState("Eat Healthy Stay Strong")
const foodDet = {
    burger:{
      isHealthy:false,
      details:"Burgers contain excessive amounts of cholesterol and saturated fat. Meat consists of fat naturally, which increases the cholesterol level. When you have burgers, the cholesterol level rises in the blood, thereby increasing the chances of heart disorders"
    },
    brocolli:{
      isHealthy:true,
      details:"Broccoli is high in many nutrients, including fiber, vitamin C, vitamin K, iron, and potassium. It also boasts more protein than most other vegetables. This green veggie can be enjoyed both raw and cooked, but recent research shows that gentle steaming provides the most health benefits"
    },
    apple:{
      isHealthy: true,
      details:"Apples can do a lot for you, thanks to plant chemicals called flavonoids. And they have pectin, a fiber that breaks down in your gut. If you take off the apple’s skin before eating it, you won’t get as much of the fiber or flavonoids."
    },
    chocolate:{
      isHealthy:false,
      details:"chocolate is high in sugar and saturated fat. It is a high-energy (high calorie) food, and too much can result in excess weight, a risk factor for cardiovascular disease"
    },
    pizza:{
      isHealthy:false,
      details:"Pizza is not good for our health. Just like any other junk food, pizza is the secret cause to abrupt weight gain, high cholesterol, digestive disorders and much more. A single slice of pizza is loaded with 300 calories, 14 gms of fats and 700 mg of sodium"
    },
    brinjal:{
      isHealthy:true,
      details:" Brinjal contains different vital minerals such as copper, manganese, potassium and magnesium that might help with bone health"
    },
    fries:{
      isHealthy:false,
      details: "Fries come packed with a high amount of trans fat, which raises your bad cholesterol and lowers your good cholesterol"
    }
  }
  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 90;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${
        ciclegraph.clientWidth / 2
      }px) rotate(-${angle}deg)`;
    }
  }, []);


  const HandleClick = event => {
    let elemntid = event.currentTarget.id;
    setDetails(foodDet[elemntid].details)
    if (foodDet[elemntid].isHealthy) {
      setImgurl(HappyKid)
    } else {
      setImgurl(CryingKid)
    }
    setTimeout(()=>{setImgurl(ThinkingKid);setDetails("Eat Healthy Stay Strong")}, 7000)
  }

  return (
    <div
      className="container"
    >
      <div className="ciclegraph" ref={graph}>
        <div style={{ display: "flex" }} className="circle">
          <img
            id="burger"
            onClick={HandleClick}
            style={{ borderRadius: "50%" }}
            src="https://static.vecteezy.com/system/resources/previews/008/693/489/original/cheese-burger-cartoon-vector.jpg"
          />
        </div>
        <div style={{ display: "flex" }} className="circle">
          <img
            onClick={HandleClick} 
            id="brocolli"
            style={{ borderRadius: "50%" }}
            src="https://img.freepik.com/free-vector/broccoli-vegetable-cartoon-vector-icon-illustration-food-nature-icon-concept-isolated-premium-flat_138676-5150.jpg?w=2000"
          />
        </div>
        <div style={{ display: "flex" }} className="circle">
          <img
            id="apple"
            onClick={HandleClick}
            style={{ borderRadius: "50%" }}
            src="https://img.freepik.com/premium-vector/apple-fruit-cartoon-vector-icon-illustration-food-nature-icon-concept-isolated-premium-vector-flat_138676-4888.jpg?w=360"
          />
        </div>
        <div style={{ display: "flex" }} className="circle">
          <img
            id="chocolate"
            onClick={HandleClick}
            style={{ borderRadius: "50%" }}
            src="https://img.freepik.com/free-vector/chocolate-bar-cartoon-icon-illustration_138676-1965.jpg?w=360"
          />
        </div>
        <div style={{ display: "flex" }} className="circle">
          <img
            id="pizza"
            onClick={HandleClick}
            style={{ borderRadius: "50%" }}
            src="https://img.freepik.com/premium-vector/pizza-melted-cartoon-illustration-flat-cartoon-style_138676-2876.jpg?w=2000"
          />
        </div>
        <div style={{ display: "flex" }} className="circle">
          <img
          id="brinjal"
          onClick={HandleClick}
            style={{ borderRadius: "50%" }}
            src="https://img.freepik.com/free-vector/eggplant-vegetable-cartoon-vector-icon-illustration-food-nature-icon-concept-isolated-premium-flat_138676-5144.jpg?w=2000"
          />
        </div>
        <div style={{ display: "flex" }} className="circle">
          <img
          id="fries"
          onClick={HandleClick}
            style={{ borderRadius: "50%" }}
            src="https://static.vecteezy.com/system/resources/previews/005/762/125/original/french-fries-cartoon-illustration-good-used-for-sticker-logo-icon-etc-eps-10-vector.jpg"
          />
        </div>
      </div>
      <div className="kid-cont">
            <img src={imgurl} className="kid"/>
        </div>
        <div className="instruction">
          <h1>Click on any food to see if it is healthy or unhealthy</h1>
        </div>
         <div className="details">
          <h2>{details}</h2>
        </div>
    </div>
  );
}  
