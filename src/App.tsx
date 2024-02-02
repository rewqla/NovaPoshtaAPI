import axios from "axios";
import { useEffect, useRef, useState } from "react";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";

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
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#recipient-form"
                    >
                      Отримувач
                    </button>
                  </h2>
                  <div
                    id="recipient-form"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="p-1">
                      <div className="p-1">
                        <label htmlFor="recipient-first-name">Ім’я</label>
                        <input
                          className="form-control"
                          id="recipient-first-name"
                          placeholder="Введіть ім’я"
                          value="Степап"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="recipient-middle-name">
                          Ім’я по батькові
                        </label>
                        <input
                          className="form-control"
                          id="recipient-middle-name"
                          placeholder="Введіть ім’я по батькові"
                          value="Радіславович"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="recipient-last-name">Прізвище</label>
                        <input
                          className="form-control"
                          id="recipient-last-name"
                          placeholder="Введіть прізвище"
                          value="Стефанчик"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="recipient-phone">Номер телефон</label>
                        <input
                          className="form-control"
                          id="recipient-phone"
                          placeholder="Введіть номер телефону"
                          value="380956437622"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="recipient-city">Місто</label>
                        <input
                          className="form-control"
                          id="recipient-city"
                          placeholder="Введіть місто"
                          value="Луцьк"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="recipient-address">
                          Адреса відділення
                        </label>
                        <select className="form-select" id="recipient-address">
                          {" "}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#sender-form"
                      aria-expanded="false"
                      aria-controls="senderForm"
                    >
                      Відправник
                    </button>
                  </h2>
                  <div
                    id="sender-form"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="p-1">
                      <div className="p-1">
                        <label htmlFor="sender-first-name">Ім’я</label>
                        <input
                          className="form-control"
                          id="sender-first-name"
                          disabled={true}
                          placeholder="Введіть ім’я"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="sender-middle-name">
                          Ім’я по батькові
                        </label>
                        <input
                          className="form-control"
                          id="sender-middle-name"
                          disabled={true}
                          placeholder="Введіть ім’я по батькові"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="sender-last-name">Прізвище</label>
                        <input
                          className="form-control"
                          id="sender-last-name"
                          disabled={true}
                          placeholder="Введіть прізвище"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="sender-phone">Номер телефон</label>
                        <input
                          className="form-control"
                          id="sender-phone"
                          placeholder="Введіть номер телефону"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="sender-city">Місто</label>
                        <input
                          className="form-control"
                          id="sender-city"
                          placeholder="Введіть місто"
                          value="Рівне"
                        />
                      </div>
                      <div className="p-1">
                        <label htmlFor="sender-address">
                          Адреса відділення
                        </label>
                        <select className="form-select" id="sender-address">
                          {" "}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#additional-information-form"
                      aria-expanded="false"
                      aria-controls="additionalForm"
                    >
                      Інші послуги
                    </button>
                  </h2>
                  <div
                    id="additional-information-form"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="p-1">
                      <div className="p-1">
                        <label htmlFor="description">Опис</label>
                        <input
                          className="form-control"
                          name="description"
                          id="description"
                          placeholder="Введіть опис"
                          value="Парка Yellow M1 XS"
                        />
                      </div>
                      <div className="row p-1">
                        <div className="col-sm-6">
                          <label htmlFor="payer-type">Платник</label>
                          <select id="payer-type" className="form-select">
                            <option value="Recipient">Отримувач</option>
                            <option value="Sender">Відправник</option>
                            <option value="ThirdPerson">Третя особа</option>
                          </select>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="payment-method">Вид платежу</label>
                          <select id="payment-method" className="form-select">
                            <option value="Cash">Готівка</option>
                            <option value="NonCash">Картка</option>
                          </select>
                        </div>
                      </div>

                      <div className="row p-1" id="warehouse-section">
                        <div className="col-sm-6">
                          <label htmlFor="weight">Вага вантажу(кг)</label>
                          <input
                            className="form-control"
                            id="weight"
                            placeholder="Введіть вагу"
                            value="0.2"
                          />
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="seats-amount">Кількість місць</label>
                          <input
                            className="form-control"
                            id="seats-amount"
                            placeholder="Введіть кількість місць"
                            value="1"
                          />
                        </div>
                      </div>

                      <div id="doors-section" className="d-none">
                        <div className="row p-1">
                          <div className="col-sm-6">
                            <label htmlFor="doors-weight">
                              Вага вантажу(кг)
                            </label>
                            <input
                              className="form-control"
                              id="doors-weight"
                              placeholder="Введіть вагу"
                              value="2.5"
                            />
                          </div>
                          <div className="col-sm-6">
                            <label htmlFor="volumetric-length">
                              Довжина(см)
                            </label>
                            <input
                              className="form-control"
                              id="volumetric-length"
                              placeholder="Введіть довжину"
                              value="10"
                            />
                          </div>
                        </div>
                        <div className="row p-1">
                          <div className="col-sm-6">
                            <label htmlFor="volumetric-width">Ширина(см)</label>
                            <input
                              className="form-control"
                              id="volumetric-width"
                              placeholder="Введіть ширину"
                              value="5"
                            />
                          </div>
                          <div className="col -sm-6">
                            <label htmlFor="volumetric-height">
                              Висота(см)
                            </label>
                            <input
                              className="form-control"
                              id="volumetric-height"
                              placeholder=" Введіть висоту"
                              value="3"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row p-1">
                        <div className="col-sm-6">
                          <label htmlFor="cost">Оцінювальна вартість</label>
                          <input
                            className="form-control"
                            id="cost"
                            placeholder="Введіть ціну товару"
                            value="2200"
                          />
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="DateTime">Дата</label>
                          <div className="input-group date" id="datepicker">
                            <input
                              type="text"
                              className="form-control"
                              id="DateTime"
                            />
                            <span className="input-group-append">
                              <span className="input-group-text bg-light d-block">
                                <i className="fa fa-calendar"></i>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row p-2">
                        <div className="col-sm-6">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            id="backward-delivery"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="backward-delivery"
                          >
                            Зворотня доставка
                          </label>
                        </div>
                      </div>
                      <button className="btn btn-warning m-1">
                        Створити накладну
                      </button>
                    </div>
                  </div>
                </div>
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
