import axios from "axios";

const API_URL: string | undefined = process.env.REACT_APP_API_URL;
const API_KEY: string | undefined = process.env.REACT_APP_NOVA_POSHTA_API_KEY;

if (!API_URL || !API_KEY) {
  throw new Error("API_URL or API_KEY is not defined.");
}

function CreateRequestBody(model: string, method: string, properties: any) {
  return {
    apiKey: API_KEY,
    modelName: model,
    calledMethod: method,
    methodProperties: properties,
  };
}

export const GetWarehouses = async (value: string) => {
  try {
    const response = await axios.post(
      API_URL,
      CreateRequestBody("Address", "getWarehouses", {
        CityRef: value,
        Page: "1",
        Limit: "100",
        Language: "UA",
      })
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getSettlements = async (value: string) => {
  try {
    const response = await axios.post(
      API_URL,
      CreateRequestBody("Address", "searchSettlements", {
        CityName: value,
        Limit: "10",
        Page: "1",
      })
    );

    return response.data.data[0].Addresses;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const GetCounterpartyRef = async () => {};
export const GetSender = async () => {};
export const Tracking = async () => {};
