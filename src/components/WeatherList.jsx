import {weatherData} from "../shared/weaher.js";

const WeatherList = () => {
    return (
        <div>
            <h2>Вся інформація про погоду</h2>
            <table border="1" 
                   cellPadding="5"
                   style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Станція</th>
                        <th>ID станції</th>
                        <th>Максимальна температура (°C)</th>
                        <th>Мінімальна температура (°C)</th>
                        <th>Середня температура (°C)</th>
                        <th>Опади (мм)</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData.map((day, index) => (
                        <tr key={index}>
                            <td>{day.DATE_OBS}</td>
                            <td>{day.STATION_NM}</td>
                            <td>{day.STATION_ID}</td>
                            <td>{day.TMPMAX}</td>
                            <td>{day.TMPMIN}</td>
                            <td>{day.TMPMN}</td>
                            <td>{day.PRECIP}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeatherList;
