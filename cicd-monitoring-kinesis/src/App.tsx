interface Car {
  maker: string
  model: string
  year: number
  vin: string
  color: string
}

const cars: Car[] = [
  {
    maker: 'Mazda',
    model: 'Miata',
    year: 2023,
    vin: 'JM1BL52K5Y0123456',
    color: 'Red',
  },
  {
    maker: 'Mercedes-Benz',
    model: 'G Class',
    year: 2023,
    vin: 'WDB46HEC1PA123456',
    color: 'Black',
  },
  {
    maker: 'BMW',
    model: 'M5',
    year: 2023,
    vin: 'WBSDC0C91H7F12345',
    color: 'Blue',
  },
]

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Car Inventory</h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: '1px solid #ffffffff',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#000000ff' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Maker</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Model</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Year</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>VIN</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Color</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index} data-testid={`car-row-${index}`}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {car.maker}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {car.model}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {car.year}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {car.vin}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {car.color}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
export { cars, type Car }
