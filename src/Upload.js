import React, { useState } from "react";
import "./Upload.css";
import JSONDATA from "./data.json"

function Upload() {
  const [url, setUrl] = useState(
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528"
  );
  const [selected, setSelected] = useState("")
  const [qnt, setQnt] = useState("")
  var tots = {
    calorie:0,
    carb:0,
    fibre:0,
    protein:0,
    fat:0
  }
  const handleFileChange = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/imgUpload?img=${url}`,
        {
          method: "POST",
        }
      );
 
      if (response.ok) {
        // Server returned a successful response
        const result = await response.text();
   
   
        console.log(result);
        setSelected(result)
        alert(result)
      } else {
        console.log("Server error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }

    console.log(JSONDATA.find((item) => item.name === selected).calorie)
    var calorie = JSONDATA.find((item) => item.name === selected).calorie
    var protein = JSONDATA.find((item) => item.name === selected).protein
    var carb = JSONDATA.find((item) => item.name === selected).carb
    var fibre = JSONDATA.find((item) => item.name === selected).fibre
    var fat = JSONDATA.find((item) => item.name === selected).fat
    tots.calorie += calorie*qnt
    tots.protein += protein*qnt
    tots.carb += carb*qnt
    tots.fat += fat*qnt
    tots.fibre += fibre*qnt
  };
  return (
    <div
      style={{
        padding: "20px",
        marginBottom: "20px",
        backgroundColor: "lightgray",
      }}
    >
      <div className="upload">
        <h1 className="upload-head">
          Capture the photo of the meal you enjoyed today.
        </h1>
        <label className="desc">
          Take a photo of the meal you ate today and upload it
        </label>
        <div>
          <input
            className="typein"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder="Type the link"
          />
          <select className="sel-inp" onChange={(e)=>{setQnt(e.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
          <button className="inp-sub" onClick={handleFileChange}>Submit</button>
      </div>
      <div className="sec-row">
        <div className="calories">
          <h2>Calories:{tots.calorie}</h2>
          <h2>Carb:{tots.carb}</h2>
          <h2>Protein:{tots.protein}</h2>
          <h2>Fat:{tots.fat}</h2>
          <h2>Fibre:{tots.fibre}</h2>
        </div>
        <div className="foods">
          <h1>Foods</h1>
        </div>
      </div>
    </div>
  );
}

export default Upload;
