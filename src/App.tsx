import axios from "axios";
import { useEffect, useState } from "react";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";

function App() {
  const API_URL = "https://api.novaposhta.ua/v2.0/json/";
  const apiKey = process.env.REACT_APP_NOVA_POSHTA_API_KEY;

  const [responseData, setResponseData] = useState([]);

  const getSettlements = async (value: string) => {
    try {
      const requestBody = {
        apiKey: apiKey,
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
          CityName: value,
          Limit: "10",
          Page: "1",
        },
      };

      const response = await axios.post(API_URL, requestBody);
      setResponseData(response.data.data[0].Addresses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleCityChange = (event: any) => {
    const value = event.target.value;
    getSettlements(value);
  };

  return (
    <>
      <DatalistInput
        placeholder="Місто"
        label="Виберіть населений пункт"
        onChange={handleCityChange}
        onSelect={(item) => console.log(item.value)}
        items={responseData.map((city: any) => ({
          id: city.Ref,
          value: city.Present,
        }))}
      />
    </>
  );
}

export default App;
