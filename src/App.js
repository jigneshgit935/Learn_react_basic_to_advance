import React from 'react';
import './App.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
const App = () => {
  const countriesWithCities = [
    {
      country: 'USA',
      cities: ['New York', 'Los Angeles', 'Chicago'],
    },
    {
      country: 'Canada',
      cities: ['Toronto', 'Vancouver', 'Montreal'],
    },
    {
      country: 'UK',
      cities: ['London', 'Manchester', 'Birmingham'],
    },
  ];

  // example 2
  const nestedData = [
    {
      category: 'Fruits',
      items: ['Apple', 'Banana', 'Mango'],
    },
    {
      category: 'Vegetables',
      items: ['Carrot', 'Brocolli', 'Spinach'],
    },
    {
      category: 'Drinks',
      items: ['Water', 'Juice', 'Tea', 'Coffe'],
    },
  ];
  return (
    <div className="App">
      Nested Map Function
      {/* exampe 1 */}
      <ul>
        {countriesWithCities.map((countryObj, index) => (
          <li key={index}>
            <b>{countryObj.country}</b>
            <ul>
              {countryObj.cities.map((city, cityIndex) => (
                <li key={cityIndex}>{city}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {/* example 2 */}
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Table className="table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Items</th>
                </tr>
              </thead>
              <tbody>
                {nestedData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.category}</td>
                    <td>
                      <ul className="list-unstyled">
                        {data.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
