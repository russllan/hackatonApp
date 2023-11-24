import React, { useState } from "react";
import styles from "./Select.module.css";

import { FaSortDown } from "react-icons/fa6";
import Option from "../option/Option";

const Select = ({ result, value, setValue, text }) => {
  
    const [active, setActive] = useState(false);
    
  return (
    <>
      <div className={styles.select} onClick={() => setActive(!active)}>
        <div className={styles.title}>
          {value == null ? text : text == "Выберите операцию" ? value.name : value.address}
        </div>
        <div>
          <FaSortDown className={active ? styles.arrowDown : styles.arrow} />
        </div>
      </div>
      <div className={styles.listFilial}>
        {active
          ? result?.map((item) => (
              <Option
                key={item.id}
                item={item}
                setValue={setValue}
                setActive={setActive}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default Select;