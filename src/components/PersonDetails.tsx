const PersonDetails = () => {
  return (
    <>
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
        <label htmlFor="sender-middle-name">Ім’я по батькові</label>
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
    </>
  );
};
export default PersonDetails;
