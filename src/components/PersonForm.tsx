import LocationDetails from "./LocationDetails";
import PersonDetails from "./PersonDetails";

const PersonForm = (props: { type: string; target: string }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${props.target}-form`}
          aria-expanded="false"
        >
          {props.type}
        </button>
      </h2>
      <div
        id={`${props.target}-form`}
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordion"
      >
        <div className="p-1">
          <PersonDetails />
          <LocationDetails />
        </div>
      </div>
    </div>
  );
};
export default PersonForm;
