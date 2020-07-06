import React, { useState, useEffect, useReducer } from "react";
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

// function Checkbox() {
//   const [checked, setCheck] = useState(false);

//   //things that we want the a component to do other than
//   //return UI is called an effect ie. console.log, alert, api call?(not sure about this one)
//   useEffect(() => {
//     alert(`checked: ${checked.toString()}`);
//   });
//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => setCheck((checked) => !checked)}
//       />
//       {checked ? "checked" : "not checked"}
//     </>
//   );
// }

// ReactDOM.render(<Checkbox />, document.getElementById("root"));

// function App() {
//   const [val, setVal] = useState("");
//   const [val2, setVal2] = useState("");

//   //2nd arguement in useEffect is called dependency array
//   useEffect(() => {
//     console.log(`field 1: ${val}`);
//   }, [val]); //adding [val] in the dependency array makes it so that we only fire this effect when val is changed

//   useEffect(() => {
//     console.log(`field 2: ${val2}`);
//   }, [val2]);

//   //this one fires whenever val and val2 are affected
//   // useEffect(() => {
//   //   console.log(`field 2: ${val2}`);
//   // }, [val,val2]);
//   return (
//     <>
//       <label>
//         Favorite Phrase:
//         <input value={val} onChange={(e) => setVal(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Second Favorite Phrase:
//         <input value={val2} onChange={(e) => setVal2(e.target.value)} />
//       </label>
//     </>
//   );
// }
// ReactDOM.render(<App />, document.getElementById("root"));

// function GitHubUser({ login }) {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${login}`)
//       .then((res) => res.json())
//       .then(setData)
//       .catch(console.error);
//   });

//   if (data) {
//     //return <div>{JSON.stringify(data)}</div>;
//     return (
//       <div>
//         <h1>
//           {data.name} - {data.login}
//         </h1>
//         <h2>{data.bio}</h2>
//         <h3>{data.blog}</h3>
//         <img src={data.avatar_url} width={100} alt="Profile Picture" />
//       </div>
//     );
//   }

//   return null;
// }
// function App() {
//   return <GitHubUser login="mokarromrahman" />;
// }

// ReactDOM.render(<App />, document.getElementById("root"));

function Checkbox() {
  //reducer takes in current state and returns a new state
  //first arguement is toggle function
  //2nd arguement is initial state
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(<Checkbox />, document.getElementById("root"));
