function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'Data fetched successfully!' };
      resolve(data); // Fulfill the Promise with data
      // For simulating an error: reject(new Error('Data fetch failed!'));
    }, 2000); // Simulating a 2-second delay for fetching data
  });
}

// Using the Promise
fetchDataFromAPI()
  .then((data) => {
    console.log(data.message); // Output: "Data fetched successfully!"
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
