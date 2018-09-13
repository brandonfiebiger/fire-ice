export const fetchHouseData = async () => {
  const response = await fetch('http://localhost:3001/api/v1/houses')
  const result = await response.json()
  return result
}

// export const fetchHouseData = () => {
//  return fetch('http://localhost:3001/api/v1/houses')
//   .then(response => response.json())
// }