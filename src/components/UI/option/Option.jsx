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
        <div>{item.address || item.name}</div>
      </div>
    </div>
  );
};

export default Option;
