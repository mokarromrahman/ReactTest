import React, { useState, useEffect } from "react";
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

// function Lake({ name }) {
//   return (
//     <div>
//       <h1>Visit {name}!</h1>
//     </div>
//   );
// }

// function SkiResort({ name }) {
//   return (
//     <div>
//       <h1>Visit {name}</h1>
//     </div>
//   );
// }

// // function App(props) {
// //   if (props.season === "summer") {
// //     return <Lake />;
// //   } else if (props.season === "winter") {
// //     return <SkiResort />;
// //   }
// // }

// function App(props) {
//   return (
//     <div>
//       {props.season === "summer" ? (
//         <Lake name="Jenny Lake" />
//       ) : props.season === "winter" ? (
//         <SkiResort name="JLMR" />
//       ) : (
//         <h1>Come back in the winter or summer</h1>
//       )}
//     </div>
//   );
// }
// ReactDOM.render(<App season="summer" />, document.getElementById("root"));

// function Lake() {
//   return <h1>Lake!</h1>;
// }

// function SkiResort() {
//   return <h1>Ski Resort!</h1>;
// }

// function App(porps) {
//   return (
//     <>
//       <Lake />
//       <SkiResort />
//     </>
//   );
// }

// //ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   <>
//     <Lake />
//     <SkiResort />
//   </>,
//   document.getElementById("root")
// );

// const snacks = ["popcorn", "pretzels", "pineapple"];

// const [first, second, third] = ["popcorn", "pretzels", "pineapple"];

// console.log(first);
// console.log(second);
// console.log(third);
// console.log([first, second, third]);

// const [, , fruit] = ["popcorn", "pretzels", "pineapple"];
// console.log(fruit);

// function App() {
//   //status is the state
//   //setStatus is the function to set the state
//   const [status, setStatus] = useState("Open");
//   return (
//     <div>
//       <h1>Status: {status}</h1>
//       <button className="btn-primary" onClick={() => setStatus("Open")}>
//         Open
//       </button>
//       <button className="btn-danger" onClick={() => setStatus("Closed")}>
//         Closed
//       </button>
//       <button
//         className="btn-warning"
//         onClick={() => setStatus("Back in 5 minutes.")}
//       >
//         Break
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//multiple state values
// function App() {
//   const [year, setYear] = useState(2050);
//   const [manager, setManager] = useState("Alex");
//   //status is the state
//   //setStatus is the function to set the state
//   const [status, setStatus] = useState("Open");
//   return (
//     <>
//       <div>
//         <h1>{year}</h1>
//         <button className="btn-primary" onClick={() => setYear(year + 1)}>
//           New Year
//         </button>
//       </div>
//       <div>
//         <h1>Manager on Duty: {manager}</h1>
//         <button className="btn-primary" onClick={() => setManager("Jose")}>
//           New Manager
//         </button>
//       </div>
//       <div>
//         <h1>Status: {status}</h1>
//         <button className="btn-primary" onClick={() => setStatus("Open")}>
//           Open
//         </button>
//         <button className="btn-danger" onClick={() => setStatus("Closed")}>
//           Closed
//         </button>
//         <button
//           className="btn-warning"
//           onClick={() => setStatus("Back in 5 minutes.")}
//         >
//           Break
//         </button>
//       </div>
//     </>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

function Checkbox() {
  const [checked, setCheck] = useState(false);

  //things that we want the a component to do other than
  //return UI is called an effect ie. console.log, alert, api call?(not sure about this one)
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setCheck((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(<Checkbox />, document.getElementById("root"));
