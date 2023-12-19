import { useState } from "react";

const cars = 
[
  { category: 'Sport', price: '110000', model: 'Golf GTI' },
  { category: 'Sedan', price: '25000', model: 'Toyota Corolla' },
  { category: 'SUV', price: '35000', model: 'Honda CR-V' },
  { category: 'Hatchback', price: '18000', model: 'Ford Fiesta' },
  { category: 'Coupe', price: '42000', model: 'Chevrolet Camaro' },
  { category: 'Truck', price: '30000', model: 'Ford F-150' },
  { category: 'Convertible', price: '55000', model: 'Mazda MX-5' },
  { category: 'Luxury', price: '90000', model: 'Mercedes-Benz S-Class' },
  { category: 'Electric', price: '60000', model: 'Tesla Model 3' },
  { category: 'Compact', price: '20000', model: 'Hyundai Elantra' },
  { category: 'Crossover', price: '40000', model: 'Nissan Rogue' },
  { category: 'Sport', price: '120000', model: 'Porsche 911' },
  { category: 'Sedan', price: '28000', model: 'Honda Civic' },
  { category: 'SUV', price: '38000', model: 'Jeep Grand Cherokee' },
  { category: 'Hatchback', price: '20000', model: 'Volkswagen Golf' },
  { category: 'Coupe', price: '45000', model: 'BMW 4 Series' },
  { category: 'Truck', price: '32000', model: 'Chevrolet Silverado' },
  { category: 'Convertible', price: '60000', model: 'Audi A5 Cabriolet' },
  { category: 'Luxury', price: '95000', model: 'Lexus LS' },
  { category: 'Electric', price: '65000', model: 'Rivian R1T' },
  { category: 'Compact', price: '22000', model: 'Kia Forte' },
];

const queryCars = (category) => 
{
  let linesTable = [];
  let categoryFound = false;

  cars.forEach((car, index) => 
  {
    if (car.category.toLocaleUpperCase() === category.toLocaleUpperCase() || category === '') 
    {
      linesTable.push(
        <tr key={index}>
          <td>{car.category}</td>
          <td>R$ {car.price}</td>
          <td>{car.model}</td>
        </tr>
      );
      categoryFound = true;
    }
  });

  if (!categoryFound) 
  {
    linesTable.push(
      <tr key="not-found">
        <td>Categoria não encontrada!</td>
      </tr>
    );
  }

  return linesTable;
};

const carsTable = (category)=>
{
  return(
    <table border='1' style={{borderCollapse: 'collapse'}}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {queryCars(category)}
      </tbody>
    </table>
  )
}

const searchCategory = (category, stateCategory)=>
{
  return(
    <div>
      <label>DIGITE UMA CATEGORIA: </label>
      <input type="text" value={category} onChange={(e)=>stateCategory(e.target.value)} />
    </div>
  )
}

function App() {
  const [category, setCategory] = useState('');

  return (
    <section style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      {searchCategory(category, setCategory)}
      <br />
      {carsTable(category)}
    </section>
  );
}

export default App;
