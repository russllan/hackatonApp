import React, { useEffect, useState, useMemo } from "react";
import styles from "./HomePage.module.css";

import Api from "../../api/Api";

import Option from "../../components/UI/option/Option";
import { FaSortDown } from "react-icons/fa6";

import { getFilial, postBook } from "../../store/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilial());
  }, []);

  const [active, setActive] = useState(false);
  const [value, setValue] = useState(null);

  const onClick = () => {
    setActive(!active);
  };

  const onSubmit = () => {
    const data = {
      filial_id: value.id,
      registerDate: "",
      operation_type: 0,
    }
    dispatch(postBook(data));
  };

  const { result } = useSelector((state) => state.book.filial);

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
          <div className={styles.select} onClick={onClick}>
            <div className={styles.title}>{value == null ? "Выберите филиал" : value.address}</div>
            <div>
              <FaSortDown
                className={active ? styles.arrowDown : styles.arrow}
              />
            </div>
          </div>
          <div className={styles.listFilial}>
            {active
              ? result?.map((item) => (
                  <Option
                    key={item}
                    item={item}
                    setValue={setValue}
                    setActive={setActive}
                  />
                ))
              : null}
          </div>
          <div style={{ marginTop: "360px", position: "absolute" }}>
            <button className={styles.btn}>Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
