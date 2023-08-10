import React from 'react';
import './App.css';
import { Table } from 'react-bootstrap';
const App = () => {
  const tableData = [
    {
      id: 1,
      name: 'Jignesh Sharma',
      age: 25,
      location: 'Udaipur',
    },
    {
      id: 2,
      name: 'Kailash Sen',
      age: 25,
      location: 'Utharda',
    },
    {
      id: 3,
      name: 'Sunil Rawat',
      age: 30,
      location: 'Mumbai',
    },
  ];

  return (
    <div className="App">
      <h1>React bootstrap</h1>

      <div>
        <Table variant="dark" responsive border={5} hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) =>
              data.age === 25 ? (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.location}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default App;
