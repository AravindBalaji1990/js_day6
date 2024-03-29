async function fetchData() {
  try {
    //fetch is available in javascript
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

console.log(fetchData())