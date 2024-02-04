import ContactPersonDetails from "../interfaces/ContactPersonDetails";
import LocationDetails from "./LocationDetails";
import PersonDetails from "./PersonDetails";
interface Props {
  type: string;
  target: string;
  personInfo: ContactPersonDetails;
}
const PersonForm = ({ type, target, personInfo }: Props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${target}-form`}
        >
          {type}
        </button>
      </h2>
      <div
        id={`${target}-form`}
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordion"
      >
        <div className="p-1">
          <PersonDetails {...personInfo} />
          <LocationDetails />
        </div>
      </div>
    </div>
  );
};
export default PersonForm;
