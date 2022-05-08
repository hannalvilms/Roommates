import { useState } from "react";
import NumberFormat from 'react-number-format';
function Calculator() {
  let [propValue, setPropValue] = useState(250000);
  let [rangeValue, setRangeValue] = useState(50);
  //range
  function rangeChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    //calculate input tracks colorful background
    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    //Set new range value
    rangeValue = target.value;
    setRangeValue(rangeValue);
  }
  //Get property value
  function propertyValue(e) {
    //assing new value to property value
    propValue = e.target.value;
    //remove dot's from number format and set new property value
    setPropValue(propValue.split('.').join(""));
  }
  return (
    <div className="calculator">
      <h3>Take the easy first step toward a mortgage</h3>
      <div className="calculator-inputs column">
        <div className="column property-value">
          <p>Property value</p>
          <p className="input-r">R$</p>
          <NumberFormat
            value={propValue}
            thousandSeparator={'.'}
            decimalSeparator={','} 
            onInput={(e) => propertyValue(e)}
            className="input-border numberFormatInput"
          />
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
              <b>{((rangeValue * propValue) / 100).toLocaleString("pt-BR")}</b>
            </p>
          </div>
          <input
            type="range"
            id="range"
            min="10"
            max="90"
            onInput={(e) => rangeChange(e)}
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
            <h6>
              {((propValue - (rangeValue * propValue) / 100)).toLocaleString(
                "pt-BR"
              )}
            </h6>
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
