const AdditionalInformationForm = () => {
  return (
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
                <label htmlFor="doors-weight">Вага вантажу(кг)</label>
                <input
                  className="form-control"
                  id="doors-weight"
                  placeholder="Введіть вагу"
                  value="2.5"
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="volumetric-length">Довжина(см)</label>
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
                <label htmlFor="volumetric-height">Висота(см)</label>
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
                <input type="text" className="form-control" id="DateTime" />
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
              <label className="form-check-label" htmlFor="backward-delivery">
                Зворотня доставка
              </label>
            </div>
          </div>
          <button className="btn btn-warning m-1">Створити накладну</button>
        </div>
      </div>
    </div>
  );
};
export default AdditionalInformationForm;
