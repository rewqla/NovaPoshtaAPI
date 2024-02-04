import ContactPersonDetails from "../interfaces/ContactPersonDetails";

const PersonDetails = ({
  isSender,
  firstName,
  middleName,
  lastName,
  phoneNumber,
}: ContactPersonDetails) => {
  const type = isSender ? "sender" : "recipient";

  return (
    <>
      <div className="p-1">
        <label htmlFor={`${type}-first-name`}>Ім’я</label>
        <input
          id={`${type}-first-name`}
          className="form-control"
          disabled={isSender}
          placeholder="Введіть ім’я"
          value={firstName}
        />
      </div>
      <div className="p-1">
        <label htmlFor={`${type}-middle-name`}>Ім’я по батькові</label>
        <input
          id={`${type}-middle-name`}
          className="form-control"
          disabled={isSender}
          placeholder="Введіть ім’я по батькові"
          value={middleName}
        />
      </div>
      <div className="p-1">
        <label htmlFor={`${type}-last-name`}>Прізвище</label>
        <input
          id={`${type}-last-name`}
          className="form-control"
          disabled={isSender}
          placeholder="Введіть прізвище"
          value={lastName}
        />
      </div>
      <div className="p-1">
        <label htmlFor={`${type}-phone`}>Номер телефон</label>
        <input
          id={`${type}-phone`}
          className="form-control"
          placeholder="Введіть номер телефону"
          value={phoneNumber}
        />
      </div>
    </>
  );
};
export default PersonDetails;
