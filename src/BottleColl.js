import React, { useState } from "react";
import PlasticBottle from "./plastic-bottle.png";
import { getDocs, collection, updateDoc, doc } from "@firebase/firestore";
import { db } from "./firebase-config";
import "./BottleColl.css";

function BottleColl(props) {
  const [bottles, setBottles] = useState(0);
  const [points, setPoints] = useState();
  let refs =[]
  let docs = [];
  let index;
  console.log(props.Buid);
  const dbGet = async () => {
    await getDocs(collection(db, "Users")).then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        refs.push(doc.id)
        docs.push(doc.data());
      });
    });
    console.log(docs[1]);
    console.log(refs);

    let userdoc = docs.find((doc) => {
      return doc.uid === props.Buid
    });
    console.log(userdoc);
    setPoints(userdoc.points)
    console.log(docs.indexOf(userdoc));
    index = docs.indexOf(userdoc)
  };
  dbGet();
  const submitBtn = async() => {
    let pointsl = bottles * 10;
    let data = {
      points:points+pointsl
    }
    setPoints(data.points)
    await updateDoc(doc(db, "Users", refs[index]), data ).then(()=>{
      console.log("Updated");
    })
    setBottles(0)
    console.log(refs[index]);
  }
  return (
    <div>
      <div className="bottlecol"></div>
      <img src={PlasticBottle} className="bottle-img" />
      <button
        className="btn-plus"
        onClick={() => {
          if (bottles > 0) {
            setBottles(bottles - 1);
          } else {
            console.log("bootles is 0");
          }
        }}
      >
        -
      </button>
      <button
        className="btn-minus"
        onClick={() => {
          setBottles(bottles + 1);
        }}
      >
        +
      </button>
      <h1 className="num">{bottles}</h1>
      <button className="btn-sub" onClick={submitBtn}>Submit</button>
      <h1 className="pnts">Points:{points}</h1>
    </div>
  );
}

export default BottleColl;
