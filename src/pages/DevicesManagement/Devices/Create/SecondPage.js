import { upProtocol } from "constants/protocolList";
import style from "./SecondPage.module.scss";
import { useState } from "react";
export default function SecondPage({ setIndex, submitData, setSubmitData }) {
  const [protocol, setProtocol] = useState(Object.keys(upProtocol)[0]);
  return (
    <div className={style.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIndex(2);
        }}
      >
        <div className={style.select}>
          <div>Chose protocol to upload data</div>
          <select
            name="upProtocol"
            onChange={(e) => {
              setProtocol(e.target.value);
            }}
            value={protocol}
          >
            {Object.keys(upProtocol).map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
        <div className={style.select}>
          <div>Protocol config method</div>
          <select name="config">
            <option> use default config</option>
          </select>
        </div>
        <input type="submit" value="Next" className={style.submit} />
      </form>
      <button className={style.back} onClick={() => setIndex(0)}>
        Back
      </button>
    </div>
  );
}
