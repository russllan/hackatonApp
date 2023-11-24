import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  getFilial,
  getTypeOperation,
  postBook,
} from "../../store/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';

import Select from "../../components/UI/select/Select";
import Calendar from "../../components/UI/calendar/Calendar";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFilial());
    dispatch(getTypeOperation());
  }, []);

  const [value, setValue] = useState(null);
  const [valueOperation, setValueOperation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState(false);

  const onSubmit = () => {
      const data = {
        filial_id: value.id,
        registerDate: selectedDate,
        operation_type: valueOperation.id,
      };
      dispatch(postBook(data));
      navigate('/simulation');
  };

  const { result } = useSelector((state) => state.book.filial);
  const resultOperation = useSelector(
    (state) => state.book.typeOperation.result
  );

  return (
    <div className={styles.home}>
      <div className={styles.text}>
        <div>
          <h1 style={{ paddingBottom: 70 }}>Добро пожаловать!</h1>
          <h1>
            Забронируйте место <br /> Онлайн
          </h1>
          <p>Введите данные</p>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.wrapperForm}>
          <div className={styles.select}>
            <Select
              result={result}
              value={value}
              setValue={setValue}
              text={"Выберите филиал"}
            />
          </div>
          <div className={styles.select}>
            <Select
              result={resultOperation}
              value={valueOperation}
              setValue={setValueOperation}
              text={"Выберите операцию"}
            />
          </div>
          <div className={styles.date}>
            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          {error ? "Выберите данные" : null}
          <div style={{ marginTop: "300px", position: "absolute" }}>
            <button onClick={onSubmit} className={styles.btn}>
              Далее
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
