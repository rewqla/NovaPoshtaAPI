const LocationDetails = () => {
  return (
    <>
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
        <label htmlFor="sender-address">Адреса відділення</label>
        <select className="form-select" id="sender-address">
          {" "}
        </select>
      </div>
    </>
  );
};
export default LocationDetails;
