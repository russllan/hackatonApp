// AnalyticsPage.js

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import { Line } from 'react-chartjs-2';

const AnalyticsPage = () => {
    const [dropdownData, setDropdownData] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Загрузка данных из БД при монтировании компонента
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ваш запрос к БД
                const response = await fetch('http://192.168.135.173:8000/filial/');
                const data = await response.json();
                setDropdownData(data);
            } catch (error) {
                console.error('Ошибка при загрузке данных из БД', error);
                const data = [{id: 1, name: "RSK", address: "Ahunbaeva 15"}];
                setDropdownData(data);
            }
        };

        fetchData();
    }, []);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleDropdownChange = (event) => {
        setSelectedId(event.target.value);
    };

    const handleAnalyticsButtonClick = () => {
        console.log('Выбран id:', selectedId);
        console.log('Аналитика выполнена для даты:', selectedDate);
    };
    const data = {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
        datasets: [
            {
                label: 'Пример данных',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        Ваше приложение
                    </a>
                </div>
            </nav>

            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Выберите адрес филиала</label>
                            <select className="form-select" onChange={handleDropdownChange} value={selectedId}>
                                <option value="" disabled hidden>
                                    Выберите адрес
                                </option>
                                {dropdownData.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.address}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Выберите дату и время</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label" >*</label> <br/>
                            <button className="btn btn-primary" onClick={handleAnalyticsButtonClick}>
                                Сделать аналитику
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container mt-4"}>
                <Line data={data} />;
            </div>
        </div>
    );
};

export default AnalyticsPage;
