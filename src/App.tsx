import axios from "axios";
import { useEffect, useRef, useState } from "react";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import AdditionalInformationForm from "./components/AdditionalInformationForm";
import RecipientForm from "./components/RecipientForm";
import SenderForm from "./components/SenderForm";

function App() {
  const API_URL = "https://api.novaposhta.ua/v2.0/json/";
  const apiKey = process.env.REACT_APP_NOVA_POSHTA_API_KEY;

  const [responseData, setResponseData] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [selectedCityRef, setSelectedCityRef] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState({
    name: "",
    ref: "",
  });

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
      setWarehouses([]);
      setSelectedWarehouse({ name: "", ref: "" });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getWarehouses = async (value: string) => {
    try {
      console.log(value);

      const requestBody = {
        apiKey: apiKey,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityRef: value,
          Page: "1",
          Limit: "100",
          Language: "UA",
        },
      };

      const response = await axios.post(API_URL, requestBody);
      setWarehouses(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getWarehouses(selectedCityRef);
  }, [selectedCityRef]);

  const handleCityChange = (event: any) => {
    const value = event.target.value;
    setSelectedCityRef("");
    setSelectedWarehouse({ name: "", ref: "" });
    getSettlements(value);
  };
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center">
        <div className="col-md-6" id="generator">
          <div className="novaposhta-container">
            <div className="accordion" id="accordion">
              <form id="nova-poshta-form">
                <RecipientForm />
                <SenderForm />
                <AdditionalInformationForm />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <>
  //     <DatalistInput
  //       placeholder="Місто"
  //       label="Виберіть населений пункт"
  //       onChange={handleCityChange}
  //       onSelect={async (item) => {
  //         setSelectedCityRef(item.id);
  //       }}
  //       items={responseData.map((city: any) => ({
  //         id: city.DeliveryCity,
  //         value: city.Present,
  //       }))}
  //     />
  //     <DatalistInput
  //       placeholder="Номер"
  //       inputProps={{
  //         disabled: selectedCityRef === "",
  //       }}
  //       value={selectedWarehouse.name}
  //       label="Виберіть точку видачі"
  //       onSelect={(item) =>
  //         setSelectedWarehouse({ name: item.value, ref: item.id })
  //       }
  //       items={warehouses.map((warehouse: any) => ({
  //         id: warehouse.Ref,
  //         value: warehouse.Description,
  //       }))}
  //     />
  //   </>
  // );
}

export default App;
