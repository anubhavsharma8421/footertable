// import React from "react";
// import WeatherApp from "../src/Modules/WeatherApp/WeatherApp"
// import Login from "./Modules/Login/Login";
// import Register from "./Modules/Register/Register";
import "./App.css"
// import Test from "./Modules/Test/Test";
// function App() {
//   return (

//     <div className="app">
//       {/* <WeatherApp/> */}
//       <Test/>
//       {/* <Register/> */}
//     </div>

//   );
// }

// export default App;


// App.js
import React from 'react';
import TableComponent from './Modules/TableComponent/TableComponent';

const data = [
  {
    id: 1,
    name: 'John',
    age: 30,
    amount: 100,
  },
  {
    id: 2,
    name: 'Jane',
    age: 25,
    amount: 150,
  },
  {
    id: 3,
    name: 'Doe',
    age: 35,
    amount: 200,
  },
  {
    id: 4,
    name: 'Doe',
    age: 35,
    amount: 200,
  },
  {
    id: 3,
    name: 'Doe',
    age: 35,
    amount: 200,
  },
  {
    id: 3,
    name: 'Doe',
    age: 35,
    amount: 200,
  },
];

const columns = [
  {
    Header: 'ID',
    accessor: 'id',
    Footer: 'Total:',
  },
  {
    Header: 'Name',
    accessor: 'name',
    Footer: 'Net:',
  },
  {
    Header: 'Age',
    accessor: 'age',
    Footer: info => {
      const total = info.rows.reduce((sum, row) => sum + row.values.age, 0);
      return <span>{total}</span>;
    },
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    Footer: info => {
      const total = info.rows.reduce((sum, row) => sum + row.values.amount, 0);
      return <span>{total}</span>;
    },
  },
];

function App() {
  return (
    <div className="App">
      <h1>React Table with Footer</h1>
      <div style={{height:"500px", overflow:"scroll"}}>
      <TableComponent data={data} columns={columns} />
      </div>
    
      
    </div>
  );
}

export default App;
