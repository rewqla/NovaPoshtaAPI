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

export const GetWarehouses = async (cityRef: string) => {
  try {
    const response = await axios.post(
      API_URL,
      CreateRequestBody("Address", "getWarehouses", {
        CityRef: cityRef,
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

export const GetSettlements = async (cityName: string) => {
  try {
    const response = await axios.post(
      API_URL,
      CreateRequestBody("Address", "searchSettlements", {
        CityName: cityName,
        Limit: "10",
        Page: "1",
      })
    );

    return response.data.data[0].Addresses;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const GetCounterpartyRef = async (counterpartyProperty: string) => {
  try {
    const response = await axios.post(
      API_URL,
      CreateRequestBody("Counterparty", "getCounterparties", {
        CounterpartyProperty: counterpartyProperty,
        Page: "1",
      })
    );

    return response.data.data[0].Ref;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const GetContactPersonSender = async (ref: string) => {
  try {
    const response = await axios.post(
      API_URL,
      CreateRequestBody("Counterparty", "getCounterpartyContactPersons", {
        Ref: ref,
        Page: "1",
      })
    );
    const contactPersonData = response.data.data[0];

    return {
      isSender: true,
      firstName: contactPersonData.FirstName,
      middleName: contactPersonData.MiddleName,
      lastName: contactPersonData.LastName,
      phoneNumber: contactPersonData.Phones,
      personRef: contactPersonData.Ref,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const Tracking = async () => {};
