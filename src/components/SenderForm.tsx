import { useState, useEffect } from "react";
import {
  GetContactPersonSender,
  GetCounterpartyRef,
} from "../api/RequestService";
import ContactPersonDetails from "../interfaces/ContactPersonDetails";
import PersonForm from "./PersonForm";

const SenderForm = () => {
  const [sender, setSender] = useState<ContactPersonDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ref = await GetCounterpartyRef("Sender");
        const personData = await GetContactPersonSender(ref);
        setSender(personData || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <PersonForm
      personInfo={sender as ContactPersonDetails}
      type="Відправник"
      target="sender"
    />
  );
};

export default SenderForm;
