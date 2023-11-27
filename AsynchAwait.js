// A function that simulates fetching data from an API (returns a Promise)
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      resolve(data);
    }, 5000); // Simulating a 2-second delay for fetching data
  });
}

// An async function that fetches data from the API using await
async function getData() {
  try {
    const response = await fetchDataFromAPI();
    console.log(response.message);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Calling the async function to fetch and log the data
getData();
