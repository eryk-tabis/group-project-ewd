function get_data_by_month(data, month, parameter) {
    let labels = [];
    let values = [];
    for (i = 0; i < 100; i++) {
        if (data[i]["day_by_day"].substring(5, 7) == month) {
            values.push(data[i][parameter]);
            labels.push(data[i]["day_by_day"].slice(0, 11));
        }
    }
    return { labels: labels, values: values };
}

function get_data_by_day(data, day, parameter) {
    let value;
    for (i = 0; i < 100; i++) {
        if (data[i]["day_by_day"].substring(5, 7) == "12" && data[i]["day_by_day"].substring(8, 10) == day) {
            value = data[i][parameter];
        }
    }
    return { label: parameter, value: value };
}

function chart1(data) {
    const chart_data = get_data_by_month(data, "12", "temperature")
    const ctx = document.getElementById('chart1');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_data.labels,
            datasets: [{
                label: 'temperatura w °C',
                data: chart_data.values,
                fill: false,
                borderColor: 'rgb(216, 61, 0)',
                tension: 0.5
            }]
        },
        options: {
            animation: {
                duration: 0
            }
        }
    });
}

function chart2(data) {
    const chart_data_oct = get_data_by_month(data, "10", "temperature");
    const chart_data_nov = get_data_by_month(data, "11", "temperature");
    const chart_data_dec = get_data_by_month(data, "12", "temperature");
    const chart_data_oct_avg = chart_data_oct.values.reduce((pv, cv) => pv + cv, 0) / chart_data_oct.labels.length; //sum all values from month and divide by numbers of days in month
    const chart_data_nov_avg = chart_data_nov.values.reduce((pv, cv) => pv + cv, 0) / chart_data_nov.labels.length; //sum all values from month and divide by numbers of days in month
    const chart_data_dec_avg = chart_data_dec.values.reduce((pv, cv) => pv + cv, 0) / chart_data_dec.labels.length; //sum all values from month and divide by numbers of days in month
    const ctx = document.getElementById('chart2');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2021-10", "2021-11", "2021-12"],
            datasets: [{
                label: 'Temperatura w °C',
                data: [chart_data_oct_avg, chart_data_nov_avg, chart_data_dec_avg],
                fill: false,
                borderColor: 'rgb(216, 61, 0)',
                tension: 0.1
            }]
        },
        options: {
            animation: {
                duration: 0
            }
        }
    });
}

function chart3(data) {
    const chart_data = get_data_by_month(data, "12", "precipitation");
    const ctx = document.getElementById('chart3');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chart_data.labels,
            datasets: [{
                label: 'Opady deszczu w l/m²',
                data: chart_data.values,
                fill: false,
                backgroundColor: 'rgb(105,210,250)',
            }]
        },
        options: {
            animation: {
                duration: 0
            }
        }        
    });
}

function chart4(data) {
    const chart_data_oct = get_data_by_month(data, "10", "precipitation");
    const chart_data_nov = get_data_by_month(data, "11", "precipitation");
    const chart_data_dec = get_data_by_month(data, "12", "precipitation");
    const chart_data_oct_avg = chart_data_oct.values.reduce((pv, cv) => pv + cv, 0) / chart_data_oct.labels.length; //sum all values from month and divide by numbers of days in month
    const chart_data_nov_avg = chart_data_nov.values.reduce((pv, cv) => pv + cv, 0) / chart_data_nov.labels.length; //sum all values from month and divide by numbers of days in month
    const chart_data_dec_avg = chart_data_dec.values.reduce((pv, cv) => pv + cv, 0) / chart_data_dec.labels.length; //sum all values from month and divide by numbers of days in month
    const ctx = document.getElementById('chart4');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2021-10", "2021-11", "2021-12"],
            datasets: [{
                label: 'Opady deszczu w l/m²',
                data: [chart_data_oct_avg, chart_data_nov_avg, chart_data_dec_avg],
                fill: false,
                backgroundColor: 'rgb(105,210,250)',
            }]
        },
        options: {
            animation: {
                duration: 0
            }
        }
    });
}

function chart5(data) {
    var date = new Date();
    const day = date.getDate();
    const chart_data_pm10 = get_data_by_day(data, day, "pm10");
    const chart_data_pm25 = get_data_by_day(data, day, "pm2,5");
    const chart_data_o3 = get_data_by_day(data, day, "o3");
    const chart_data_no2 = get_data_by_day(data, day, "no2");
    const chart_data_so2 = get_data_by_day(data, day, "so2");
    const ctx = document.getElementById('chart5');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [chart_data_pm10.label, chart_data_pm25.label, chart_data_o3.label, chart_data_no2.label, chart_data_so2.label],
            datasets: [{
                // !!! jednostki przy value !!!
                data: [chart_data_pm10.value, chart_data_pm25.value, chart_data_o3.value, chart_data_no2.value, chart_data_so2.value],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(66, 245, 215)',
                    'rgb(245, 221, 66)',
                ],
                hoverOffset: 4
            }]
        },
        options: {
            animation: {
                duration: 0
            }
        }
    });
    document.getElementById("chart-circle").innerHTML="Zanieczyszczenie powietrza z dnia " + day + " grudnia w  µg/m³";
}

function chart6(data) {
    const chart_data = get_data_by_month(data, "12", "pm2,5");
    const ctx = document.getElementById('chart6');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_data.labels,
            datasets: [{
                label: 'pm 2.5 w µg/m³',
                data: chart_data.values,
                fill: false,
                borderColor: 'rgb(216, 61, 0)',
                tension: 0.1
            }]
        },
        options: {
            animation: {
                duration: 0
            }
        }
    });
}

function addTable(data){
    var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
}

async function get_data() {
    const response = await fetch("https://my.api.mockaroo.com/data.json?key=a2d938f0");
    const data = await response.json();
    addTable(data);
    chart1(data);
    chart2(data);
    chart3(data);
    chart4(data);
    chart5(data);
    chart6(data);
}

get_data()
