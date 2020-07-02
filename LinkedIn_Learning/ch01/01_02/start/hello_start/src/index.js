import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// let city = {
//   "name": "Madrid",
//   "country": "Spain"
// };

// function Hello({library, message, number})
// {
//   //console.log(Object.keys(props));
//   return (
//   <div>
//     <h1>Welcome to {library}</h1>
//     <p>{message}</p>
//     <ul>
//       <li>{number} props total</li>
//     </ul>
//   </div>);
// }
// ReactDOM.render(
//     <Hello library = "vue.js" message="have fun!" number={3}/>,
//   document.getElementById('root')
// );

// function Lake({name})
// {
//   return(
//     <h1>{name}</h1>
//   );
// }

// function App()
// {
//   return(
//     <div>
//       <Lake name="Lake Tahoe"></Lake>
//       <Lake name="Angora Lake"></Lake>
//       <Lake name="Shirley Lake"></Lake>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

// const lakeList = ["Echo Lake", "Maud Lake", "Casecade Lake"];

// //lakes has to be inside {} so that it is treated as an array and not an object
// function App({lakes})
// {
//   return (
//   <ul>
//       {lakes.map(lake => (
//       <li>
//         {lake}
//       </li>))}
//   </ul>)
// }

// ReactDOM.render(
//   <App lakes={lakeList} />,
//   document.getElementById("root")
// );

// const lakeList = [

//     {id:"1", name:"Echo", trailhead:"Echo"},
//     {id:"2", name:"Maud", trailhead:"Wrights"},
//     {id:"3", name:"Velma", trailhead:"Bayview"}
// ];

// //lakes has to be inside {} so that it is treated as an array and not an object
// function App({lakes})
// {
//   return (
//     <div>
//       {lakes.map(lake => (
//         <div>
//           <h2>{lake.name}</h2>
//           <p>Accessed by: {lake.trailhead}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// ReactDOM.render(
//   <App lakes={lakeList} />,
//   document.getElementById("root")
// );

// const list = [1, 2, 3, 4, 5];

// //lakes has to be inside {} so that it is treated as an array and not an object
// function App({ items }) {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.toString()}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// ReactDOM.render(<App items={list} />, document.getElementById("root"));

function Lake() {
  return (
    <div>
      <h1>Visit Jenny Lake!</h1>
    </div>
  );
}

function SkiResort() {
  return (
    <div>
      <h1>Visit Jackson Hole Mountain Resort!</h1>
    </div>
  );
}

function App(props) {
  if (props.season === "summer") {
    return <Lake />;
  } else if (props.season === "winter") {
    return <SkiResort />;
  }
}
ReactDOM.render(<App season="winter" />, document.getElementById("root"));
