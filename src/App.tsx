import axios from "axios";
import { useEffect, useRef, useState } from "react";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import {
  GetContactPersonSender,
  GetCounterpartyRef,
  GetSettlements,
  GetWarehouses,
} from "./api/RequestService";
import AdditionalInformationForm from "./components/AdditionalInformationForm";
import RecipientForm from "./components/RecipientForm";
import SenderForm from "./components/SenderForm";

function App() {
  // async function fetchData() {
  //   console.log(1222);
  //   console.log(await GetCounterpartyRef("Recipient"));
  //   console.log(
  //     await GetContactPersonSender(await GetCounterpartyRef("Sender"))
  //   );
  // }
  // fetchData();

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
