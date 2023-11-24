import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

import { getFilial, getTypeOperation, postBook } from "../../store/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";

import Select from "../../components/UI/select/Select";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilial());
    dispatch(getTypeOperation());
  }, []);

  const [value, setValue] = useState(null);
  const [valueOperation, setValueOperation] = useState(null);

  const onSubmit = () => {
    const data = {
      filial_id: value.id,
      registerDate: "",
      operation_type: 0,
    };
    dispatch(postBook(data));
  };

  const { result } = useSelector((state) => state.book.filial);
  const resultOperation = useSelector((state) => state.book.typeOperation.result);

  return (
    <div className={styles.home}>
      <div className={styles.text}>
        <div>
          <h1>Забронируйте место Онлайн</h1>
          <p>Введите данные</p>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.wrapperForm}>
          <div className={styles.select}><Select result={result} value={value} setValue={setValue} text={"Выберите филиал"} /></div>
          <div className={styles.select}><Select result={resultOperation} value={valueOperation} setValue={setValueOperation} text={"Выберите операцию"}/></div>
          <div style={{ marginTop: "360px", position: "absolute" }}>
            <button className={styles.btn}>Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
