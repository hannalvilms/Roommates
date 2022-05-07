function Calculator() {
  function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    console.log(target.value);
  }
  const kk  = 'kkk';
  return (
    <div className="calculator">
      <h3>Take the easy first step toward a mortgage</h3>
      <div className="calculator-inputs column">
        <div className="column property-value">
          <p>Property value</p>
          <p className="input-r">R$</p>
          <input type="number" className="input-border"></input>
        </div>
        <div className="calculator-row row term">
          <p>Term</p>
          <p>
            <b>30 years</b>
          </p>
        </div>
        <div className="column down-payment">
          <div>
            <p>Down payment: &nbsp;</p>
            <p className="input-r">
              <b>R$&nbsp;</b>
            </p>
            <p>
              <b>125.000 {kk}</b>
            </p>
          </div>
          <input
            type="range"
            id="range"
            min="10"
            max="90"
            onInput={(e) => handleInputChange(e)}
          />
          <div className="calculator-row row">
            <p>10%</p>
            <p>90%</p>
          </div>
        </div>

        <div className="calculator-row row financing">
          <p>Financing</p>
          <div>
            <h6 className="input-r">R$ &nbsp;</h6>
            <h6>XXX.XXX</h6>
          </div>
        </div>
        <div className="column cpf">
          <p>CPF</p>
          <input
            type="text"
            readOnly
            className="input-border"
            value="XXX.XXX.XXX-XX"
          ></input>
        </div>
        <div className="funding-button">
          <button className="blue-button">Funding consultation</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
