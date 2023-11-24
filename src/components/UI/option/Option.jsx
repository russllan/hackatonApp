import React, {useState} from "react";
import styles from "./Option.module.css";

const Option = ({ item, setValue, setActive }) => {

  const selectItem = (item) => {
    setValue(item);
    setActive(false);
  }

  return (
    <div className={styles.Option} onClick={() => selectItem(item)}>
      <div className={styles.wrapper}>
        <div>{item.address}</div>
      </div>
    </div>
  );
};

export default Option;
