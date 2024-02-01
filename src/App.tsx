import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const API_URL = "https://api.novaposhta.ua/v2.0/json/";
  const apiKey = process.env.REACT_APP_NOVA_POSHTA_API_KEY;

  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const requestBody = {
        apiKey: process.env.REACT_APP_NOVA_POSHTA_API_KEY,
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
          CityName: "ки",
          Limit: "10",
          Page: "1",
        },
      };

      const response = await axios.post(API_URL, requestBody);
      setResponseData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>HI</h1>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;
