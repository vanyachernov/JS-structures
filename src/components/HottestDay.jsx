import {weatherData} from "../shared/weaher.js";

function findHottestDay(data) {
    let hottestDay = data[0];
    
    for (let i = 1; i < data.length; i++) {
        if (data[i].TMPMAX > hottestDay.TMPMAX) {
            hottestDay = data[i];
        }
    }
    
    return hottestDay;
}

const HottestDay = () => {
    const hottestDay = findHottestDay(weatherData);

    return (
        <div>
            <h2>Найспекотніший день</h2>
            <table border="1" cellPadding="10" style={{borderCollapse: 'collapse', width: '100%'}}>
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
                    <tr>
                        <td>{hottestDay.DATE_OBS}</td>
                        <td>{hottestDay.STATION_NM}</td>
                        <td>{hottestDay.STATION_ID}</td>
                        <td>{hottestDay.TMPMAX}</td>
                        <td>{hottestDay.TMPMIN}</td>
                        <td>{hottestDay.TMPMN}</td>
                        <td>{hottestDay.PRECIP}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HottestDay;
