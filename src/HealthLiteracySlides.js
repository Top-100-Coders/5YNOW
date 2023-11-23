import React from 'react'
import "./HealthLiteracySlides.css"

function HealthLiteracySlides() {
 const slides = [
  {
   img:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/10/essential-nutrients.jpg",
   heading:"Nutrients",
   text:"Nutrients are chemical substances found in every living thing on Earth. They are necessary to the lives of people, plants, animals, and all other organisms. Nutrients help break down food to give organisms energy. They are used in every process of an organism’s body. Some of the processes are growth (building cells), repair (healing a wound), and maintaining life (breathing)."
  },
  {
   img:"https://th.bing.com/th/id/OIP.siF0sXQ09ed6eCHRpM8BlQHaE0?pid=ImgDet&rs=1",
      heading:"Obesity",
   text:"Overweight and obesity are defined as abnormal or excessive fat accumulation that presents a risk to health. he issue has grown to epidemic proportions, with over 4 million people dying each year as a result of being overweight or obese in 2017 according to the global burden of disease. Rates of overweight and obesity continue to grow in adults and children. From 1975 to 2016, the prevalence of overweight or obese children and adolescents aged 5–19 years increased more than four-fold from 4% to 18% globally"
  },
  {
   img:"https://www.adwdiabetes.com/articles/wp-content/uploads/2016/09/Plate-Scale-with-Small-Vegetables-on-it.jpg",
    heading:"Malnutrition",  
   text:"Malnutrition refers to deficiencies, excesses or imbalances in a person’s intake of energy and/or nutrients. One is ‘undernutrition’—which includes stunting (low height for age), wasting (low weight for height), underweight (low weight for age) and micronutrient deficiencies or insufficiencies (a lack of important vitamins and minerals). Malnutrition affects people in every country. Around 1.9 billion adults worldwide are overweight, while 462 million are underweight."
  }
 ]
  return (
    <div  style={{width:"100vw", height:"160vh", backgroundColor:"white"}}>
     
      <div style={{display:"flex", flexDirection:"column"}}>
       {slides.map((val, key )=>{
        return(
        <div className="slide">
           <img src={val.img} className="img"/>
           <h1 className="heading">{val.heading}</h1>
           <h1 style={{position:"absolute"}}>{val.text}</h1>
         </div>
        )
       })}
       <div
      style={{
        height: "1500px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundImage:"conic-gradient(lightblue, lightgreen)"
      }}
    >
      <div
        style={{
          height: "1200px",
          width: "40%",
          border: "10px solid green",
          position: "relative",
          top: "50px",
          borderRadius: "50px",
          fontSize: "20px",
          textAlign: "left",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Healthy Food Habits ✅</h1>
        <ul>
          <h2>
            <li>
              Eat according to the food pyramid and maintain a balanced diet.
            </li>
            <br />
            <li>
              Choose more fresh vegetables and meat and foods that are rich in
              dietary fibre such as whole wheat cereal products.
            </li>
            <br />
            <li>Choose low-fat or skimmed dairy products.</li>
            <br />
            <li>
              Drink 6 to 8 glasses of fluids such as water, plain tea or clear
              soup every day.
            </li>
            <br />
            <li>
              Have three meals everyday at regular hours. Healthy snacks can be
              taken between meals.
            </li>
            <br />
            <li>Have breakfast every day.</li>
            <br />
            <li>
              Try and eat home cooked meals as far as possible because most food
              offered by restaurants and fast food outlets are high in calories
              and rich in fat while low on dietary fibres.
            </li>
            <br />
            <li>Relax when you eat and chew slowly.</li>
            <br />
            <li>Read the food labels carefully when you buy any food item.</li>
          </h2>
        </ul>
      </div>
      <div
        style={{
          height: "1200px",
          width: "40%",
          border: "10px solid red",
          position: "relative",
          top: "50px",
          borderRadius: "50px",
          fontSize: "20px",
          textAlign: "left",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Non Healthy Food Habits ❌</h1>
        <ul>
          <h2>
            <li>
              Don't eat high sugar food such as candies, ice-creams, soft drinks
              and other sugar added drinks.
            </li>
            <br/>
            <li>
              Don't eat too salty, marinated or preserved foods such as salted
              fish, preserved vegetables, Chinese sausages etc.
            </li>
            <br/>
            <li>Don't eat too much before going to bed.</li>
            <br/>
            <li>Don't buy food from unlicensed hawkers.</li>
            <br/>
            <li>
              Dont skip breakfast
            </li>
            <br/>
            <li>
              Dont eat when not hungry
            </li>
            <br/>
            <li>
      Dont eat too fast
            </li>
            <br/>
            <li>
              Dont snack round-the-clock
            </li>
            <br/>
            <li>
              Dont skip veggies
            </li>
            <br/>
            <li>
              Dont skip meals
            </li>
            <br/>
            <li>
              Not washing hands before and after eating
            </li>
            <br/>
            <li>
              Drinking airated drinks
            </li>
          </h2>
        </ul>
      </div>
    </div>
      </div>
    </div>
  )
}

export default HealthLiteracySlides