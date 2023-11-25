// AnalyticsPage.js

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import { format, addHours } from 'date-fns';
import {
    Chart as ChartJS,
    CategoryScale,
    RadialLinearScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
import {Bar, Line, PolarArea} from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    RadialLinearScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
);
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

    const handleAnalyticsButtonClick = async () => {
        console.log('Выбран id:', selectedId);
        console.log('Аналитика выполнена для даты:', selectedDate);
        try {
            const response = await fetch('http://ваш_сервер/ваш_ресурс', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selectedId,
                    selectedDate,
                }),
            });

            if (response.ok) {
                console.log('Данные успешно отправлены!');
                // Дополнительные действия при успешной отправке
            } else {
                console.error('Ошибка при отправке данных:', response.status);
                // Дополнительные действия при ошибке
            }
        } catch (error) {
            console.error('Ошибка при выполнении POST-запроса:', error);
        }
    };
    const generateTimeLabels = () => {
        const startDate = new Date();
        startDate.setHours(8, 0, 0, 0);

        const labels = Array.from({ length: 13 }, (_, index) => {
            const date = addHours(startDate, index);
            return format(date, 'HH:mm');
        });

        return labels;
    };

    const data = {
        labels: generateTimeLabels(),
        datasets: [
            {
                label: 'Completed',
                data: [12, 19, 3, 5, 2, 3, 8, 10, 15, 12, 7, 5, 3], // Замените данные на ваши реальные данные
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
            },
            {
                label: 'NotUsed',
                data: [12, 4, 3, 5, 2, 6, 2, 1, 22, 32, 3, 1, 2], // Замените данные на ваши реальные данные
                fill: false,
                borderColor: 'rgba(43,54,35,23,2)',
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
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
                <div className="row">
                    <div className="col">
                        <Line data={data} />
                    </div>
                    <div className="col">
                        <Line data={data} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <PolarArea data={data} />;
                    </div>
                    <div className="col">
                        <Bar options={options} data={data}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
