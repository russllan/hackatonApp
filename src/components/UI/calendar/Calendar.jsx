import "bootstrap/dist/css/bootstrap.min.css";

const Calendar = ({ selectedDate, setSelectedDate }) => {

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Выберите дату и время</label>
      <input
        type="datetime-local"
        className="form-control"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Calendar;
