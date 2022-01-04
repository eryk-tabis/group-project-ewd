var data = JSON.parse(`[{"id":1,"day_by_day":"2021-10-01 00:00:00 UTC","temperature":16,"precipitation":2.4,"pm10":69,"pm2,5":166,"o3":17,"no2":16,"so2":2},{"id":2,"day_by_day":"2021-10-02 00:00:00 UTC","temperature":16,"precipitation":36.7,"pm10":29,"pm2,5":71,"o3":28,"no2":38,"so2":8},{"id":3,"day_by_day":"2021-10-03 00:00:00 UTC","temperature":1,"precipitation":3.3,"pm10":22,"pm2,5":76,"o3":4,"no2":9,"so2":5},{"id":4,"day_by_day":"2021-10-04 00:00:00 UTC","temperature":-5,"precipitation":16.1,"pm10":29,"pm2,5":132,"o3":5,"no2":33,"so2":6},{"id":5,"day_by_day":"2021-10-05 00:00:00 UTC","temperature":-3,"precipitation":38.4,"pm10":36,"pm2,5":118,"o3":12,"no2":35,"so2":4},{"id":6,"day_by_day":"2021-10-06 00:00:00 UTC","temperature":-3,"precipitation":36.8,"pm10":41,"pm2,5":51,"o3":4,"no2":19,"so2":10},{"id":7,"day_by_day":"2021-10-07 00:00:00 UTC","temperature":5,"precipitation":34.6,"pm10":22,"pm2,5":123,"o3":7,"no2":7,"so2":9},{"id":8,"day_by_day":"2021-10-08 00:00:00 UTC","temperature":-3,"precipitation":30.5,"pm10":29,"pm2,5":63,"o3":20,"no2":34,"so2":8},{"id":9,"day_by_day":"2021-10-09 00:00:00 UTC","temperature":-8,"precipitation":4.8,"pm10":48,"pm2,5":62,"o3":14,"no2":19,"so2":4},{"id":10,"day_by_day":"2021-10-10 00:00:00 UTC","temperature":-10,"precipitation":38.1,"pm10":33,"pm2,5":30,"o3":17,"no2":27,"so2":8},{"id":11,"day_by_day":"2021-10-11 00:00:00 UTC","temperature":4,"precipitation":8.1,"pm10":33,"pm2,5":65,"o3":10,"no2":30,"so2":7},{"id":12,"day_by_day":"2021-10-12 00:00:00 UTC","temperature":8,"precipitation":38,"pm10":46,"pm2,5":36,"o3":15,"no2":48,"so2":6},{"id":13,"day_by_day":"2021-10-13 00:00:00 UTC","temperature":7,"precipitation":17,"pm10":48,"pm2,5":125,"o3":14,"no2":28,"so2":5},{"id":14,"day_by_day":"2021-10-14 00:00:00 UTC","temperature":8,"precipitation":25.6,"pm10":40,"pm2,5":42,"o3":16,"no2":34,"so2":10},{"id":15,"day_by_day":"2021-10-15 00:00:00 UTC","temperature":-7,"precipitation":18.6,"pm10":65,"pm2,5":146,"o3":23,"no2":13,"so2":1},{"id":16,"day_by_day":"2021-10-16 00:00:00 UTC","temperature":-10,"precipitation":7.8,"pm10":18,"pm2,5":25,"o3":18,"no2":7,"so2":4},{"id":17,"day_by_day":"2021-10-17 00:00:00 UTC","temperature":5,"precipitation":4,"pm10":45,"pm2,5":123,"o3":6,"no2":18,"so2":8},{"id":18,"day_by_day":"2021-10-18 00:00:00 UTC","temperature":-10,"precipitation":32.9,"pm10":32,"pm2,5":143,"o3":5,"no2":27,"so2":3},{"id":19,"day_by_day":"2021-10-19 00:00:00 UTC","temperature":4,"precipitation":39.1,"pm10":12,"pm2,5":153,"o3":15,"no2":48,"so2":7},{"id":20,"day_by_day":"2021-10-20 00:00:00 UTC","temperature":10,"precipitation":1,"pm10":38,"pm2,5":102,"o3":2,"no2":26,"so2":2},{"id":21,"day_by_day":"2021-10-21 00:00:00 UTC","temperature":4,"precipitation":32.4,"pm10":26,"pm2,5":29,"o3":30,"no2":26,"so2":1},{"id":22,"day_by_day":"2021-10-22 00:00:00 UTC","temperature":14,"precipitation":7.4,"pm10":58,"pm2,5":161,"o3":12,"no2":19,"so2":1},{"id":23,"day_by_day":"2021-10-23 00:00:00 UTC","temperature":17,"precipitation":39.5,"pm10":61,"pm2,5":94,"o3":24,"no2":34,"so2":10},{"id":24,"day_by_day":"2021-10-24 00:00:00 UTC","temperature":14,"precipitation":15.6,"pm10":47,"pm2,5":39,"o3":12,"no2":6,"so2":2},{"id":25,"day_by_day":"2021-10-25 00:00:00 UTC","temperature":-7,"precipitation":29.3,"pm10":10,"pm2,5":166,"o3":23,"no2":37,"so2":6},{"id":26,"day_by_day":"2021-10-26 00:00:00 UTC","temperature":3,"precipitation":13,"pm10":64,"pm2,5":75,"o3":29,"no2":21,"so2":6},{"id":27,"day_by_day":"2021-10-27 00:00:00 UTC","temperature":-10,"precipitation":22.9,"pm10":39,"pm2,5":59,"o3":20,"no2":3,"so2":2},{"id":28,"day_by_day":"2021-10-28 00:00:00 UTC","temperature":7,"precipitation":26.5,"pm10":30,"pm2,5":146,"o3":28,"no2":33,"so2":10},{"id":29,"day_by_day":"2021-10-29 00:00:00 UTC","temperature":0,"precipitation":17.6,"pm10":51,"pm2,5":41,"o3":16,"no2":22,"so2":6},{"id":30,"day_by_day":"2021-10-30 00:00:00 UTC","temperature":-2,"precipitation":9.7,"pm10":59,"pm2,5":62,"o3":5,"no2":18,"so2":2},{"id":31,"day_by_day":"2021-10-31 00:00:00 UTC","temperature":9,"precipitation":17.5,"pm10":65,"pm2,5":31,"o3":21,"no2":30,"so2":1},{"id":32,"day_by_day":"2021-11-01 00:00:00 UTC","temperature":8,"precipitation":4.4,"pm10":46,"pm2,5":143,"o3":16,"no2":7,"so2":3},{"id":33,"day_by_day":"2021-11-02 00:00:00 UTC","temperature":-5,"precipitation":34.3,"pm10":51,"pm2,5":58,"o3":1,"no2":36,"so2":10},{"id":34,"day_by_day":"2021-11-03 00:00:00 UTC","temperature":15,"precipitation":22.5,"pm10":10,"pm2,5":154,"o3":12,"no2":47,"so2":5},{"id":35,"day_by_day":"2021-11-04 00:00:00 UTC","temperature":-8,"precipitation":36.5,"pm10":26,"pm2,5":94,"o3":17,"no2":3,"so2":3},{"id":36,"day_by_day":"2021-11-05 00:00:00 UTC","temperature":10,"precipitation":9,"pm10":57,"pm2,5":22,"o3":10,"no2":50,"so2":4},{"id":37,"day_by_day":"2021-11-06 00:00:00 UTC","temperature":6,"precipitation":17.4,"pm10":13,"pm2,5":49,"o3":7,"no2":39,"so2":4},{"id":38,"day_by_day":"2021-11-07 00:00:00 UTC","temperature":6,"precipitation":18.8,"pm10":51,"pm2,5":79,"o3":1,"no2":12,"so2":1},{"id":39,"day_by_day":"2021-11-08 00:00:00 UTC","temperature":3,"precipitation":8.9,"pm10":13,"pm2,5":130,"o3":4,"no2":42,"so2":4},{"id":40,"day_by_day":"2021-11-09 00:00:00 UTC","temperature":-10,"precipitation":28.9,"pm10":69,"pm2,5":69,"o3":4,"no2":10,"so2":10},{"id":41,"day_by_day":"2021-11-10 00:00:00 UTC","temperature":17,"precipitation":13.5,"pm10":59,"pm2,5":126,"o3":22,"no2":42,"so2":5},{"id":42,"day_by_day":"2021-11-11 00:00:00 UTC","temperature":16,"precipitation":14.2,"pm10":45,"pm2,5":97,"o3":9,"no2":13,"so2":1},{"id":43,"day_by_day":"2021-11-12 00:00:00 UTC","temperature":-5,"precipitation":34.3,"pm10":40,"pm2,5":109,"o3":9,"no2":11,"so2":6},{"id":44,"day_by_day":"2021-11-13 00:00:00 UTC","temperature":16,"precipitation":40,"pm10":42,"pm2,5":39,"o3":19,"no2":3,"so2":8},{"id":45,"day_by_day":"2021-11-14 00:00:00 UTC","temperature":2,"precipitation":6.3,"pm10":55,"pm2,5":133,"o3":18,"no2":40,"so2":6},{"id":46,"day_by_day":"2021-11-15 00:00:00 UTC","temperature":-9,"precipitation":17.8,"pm10":30,"pm2,5":92,"o3":24,"no2":3,"so2":2},{"id":47,"day_by_day":"2021-11-16 00:00:00 UTC","temperature":-6,"precipitation":22.9,"pm10":20,"pm2,5":88,"o3":15,"no2":7,"so2":2},{"id":48,"day_by_day":"2021-11-17 00:00:00 UTC","temperature":-2,"precipitation":33.3,"pm10":34,"pm2,5":112,"o3":29,"no2":9,"so2":1},{"id":49,"day_by_day":"2021-11-18 00:00:00 UTC","temperature":10,"precipitation":28.4,"pm10":36,"pm2,5":168,"o3":5,"no2":20,"so2":8},{"id":50,"day_by_day":"2021-11-19 00:00:00 UTC","temperature":15,"precipitation":11.6,"pm10":6,"pm2,5":46,"o3":22,"no2":6,"so2":7},{"id":51,"day_by_day":"2021-11-20 00:00:00 UTC","temperature":4,"precipitation":3.6,"pm10":66,"pm2,5":73,"o3":5,"no2":43,"so2":10},{"id":52,"day_by_day":"2021-11-21 00:00:00 UTC","temperature":7,"precipitation":7.3,"pm10":6,"pm2,5":45,"o3":26,"no2":14,"so2":10},{"id":53,"day_by_day":"2021-11-22 00:00:00 UTC","temperature":-8,"precipitation":18.2,"pm10":45,"pm2,5":109,"o3":15,"no2":11,"so2":5},{"id":54,"day_by_day":"2021-11-23 00:00:00 UTC","temperature":5,"precipitation":26.9,"pm10":39,"pm2,5":18,"o3":24,"no2":37,"so2":6},{"id":55,"day_by_day":"2021-11-24 00:00:00 UTC","temperature":11,"precipitation":4.5,"pm10":52,"pm2,5":106,"o3":4,"no2":36,"so2":9},{"id":56,"day_by_day":"2021-11-25 00:00:00 UTC","temperature":-10,"precipitation":30.3,"pm10":8,"pm2,5":29,"o3":3,"no2":9,"so2":5},{"id":57,"day_by_day":"2021-11-26 00:00:00 UTC","temperature":0,"precipitation":19.8,"pm10":7,"pm2,5":156,"o3":29,"no2":38,"so2":8},{"id":58,"day_by_day":"2021-11-27 00:00:00 UTC","temperature":7,"precipitation":3.1,"pm10":31,"pm2,5":95,"o3":11,"no2":33,"so2":2},{"id":59,"day_by_day":"2021-11-28 00:00:00 UTC","temperature":-5,"precipitation":18,"pm10":22,"pm2,5":76,"o3":18,"no2":26,"so2":3},{"id":60,"day_by_day":"2021-11-29 00:00:00 UTC","temperature":-10,"precipitation":38.1,"pm10":7,"pm2,5":161,"o3":22,"no2":21,"so2":6},{"id":61,"day_by_day":"2021-11-30 00:00:00 UTC","temperature":5,"precipitation":18.5,"pm10":20,"pm2,5":90,"o3":30,"no2":47,"so2":4},{"id":62,"day_by_day":"2021-12-01 00:00:00 UTC","temperature":2,"precipitation":25.8,"pm10":41,"pm2,5":156,"o3":5,"no2":33,"so2":7},{"id":63,"day_by_day":"2021-12-02 00:00:00 UTC","temperature":6,"precipitation":21.8,"pm10":60,"pm2,5":27,"o3":18,"no2":45,"so2":1},{"id":64,"day_by_day":"2021-12-03 00:00:00 UTC","temperature":12,"precipitation":3,"pm10":11,"pm2,5":89,"o3":1,"no2":36,"so2":7},{"id":65,"day_by_day":"2021-12-04 00:00:00 UTC","temperature":3,"precipitation":12.8,"pm10":47,"pm2,5":26,"o3":6,"no2":46,"so2":5},{"id":66,"day_by_day":"2021-12-05 00:00:00 UTC","temperature":7,"precipitation":9.7,"pm10":68,"pm2,5":152,"o3":1,"no2":14,"so2":4},{"id":67,"day_by_day":"2021-12-06 00:00:00 UTC","temperature":14,"precipitation":15.3,"pm10":18,"pm2,5":63,"o3":21,"no2":7,"so2":6},{"id":68,"day_by_day":"2021-12-07 00:00:00 UTC","temperature":17,"precipitation":26.5,"pm10":40,"pm2,5":27,"o3":3,"no2":13,"so2":9},{"id":69,"day_by_day":"2021-12-08 00:00:00 UTC","temperature":-2,"precipitation":13,"pm10":42,"pm2,5":63,"o3":21,"no2":4,"so2":5},{"id":70,"day_by_day":"2021-12-09 00:00:00 UTC","temperature":-1,"precipitation":22.4,"pm10":68,"pm2,5":35,"o3":9,"no2":17,"so2":10},{"id":71,"day_by_day":"2021-12-10 00:00:00 UTC","temperature":17,"precipitation":32.9,"pm10":66,"pm2,5":159,"o3":21,"no2":22,"so2":7},{"id":72,"day_by_day":"2021-12-11 00:00:00 UTC","temperature":-4,"precipitation":2.6,"pm10":32,"pm2,5":96,"o3":14,"no2":38,"so2":6},{"id":73,"day_by_day":"2021-12-12 00:00:00 UTC","temperature":0,"precipitation":9.5,"pm10":48,"pm2,5":42,"o3":22,"no2":27,"so2":7},{"id":74,"day_by_day":"2021-12-13 00:00:00 UTC","temperature":15,"precipitation":15.3,"pm10":19,"pm2,5":62,"o3":28,"no2":5,"so2":8},{"id":75,"day_by_day":"2021-12-14 00:00:00 UTC","temperature":6,"precipitation":18.6,"pm10":30,"pm2,5":16,"o3":23,"no2":33,"so2":6},{"id":76,"day_by_day":"2021-12-15 00:00:00 UTC","temperature":-5,"precipitation":14.4,"pm10":9,"pm2,5":122,"o3":25,"no2":24,"so2":10},{"id":77,"day_by_day":"2021-12-16 00:00:00 UTC","temperature":-2,"precipitation":7.1,"pm10":39,"pm2,5":33,"o3":8,"no2":21,"so2":8},{"id":78,"day_by_day":"2021-12-17 00:00:00 UTC","temperature":5,"precipitation":4.4,"pm10":43,"pm2,5":45,"o3":22,"no2":8,"so2":2},{"id":79,"day_by_day":"2021-12-18 00:00:00 UTC","temperature":-4,"precipitation":17.6,"pm10":10,"pm2,5":34,"o3":26,"no2":39,"so2":5},{"id":80,"day_by_day":"2021-12-19 00:00:00 UTC","temperature":7,"precipitation":34.1,"pm10":11,"pm2,5":95,"o3":30,"no2":11,"so2":10},{"id":81,"day_by_day":"2021-12-20 00:00:00 UTC","temperature":-7,"precipitation":22.7,"pm10":27,"pm2,5":115,"o3":18,"no2":8,"so2":1},{"id":82,"day_by_day":"2021-12-21 00:00:00 UTC","temperature":0,"precipitation":24.2,"pm10":52,"pm2,5":70,"o3":8,"no2":20,"so2":2},{"id":83,"day_by_day":"2021-12-22 00:00:00 UTC","temperature":10,"precipitation":3,"pm10":24,"pm2,5":45,"o3":12,"no2":3,"so2":2},{"id":84,"day_by_day":"2021-12-23 00:00:00 UTC","temperature":-4,"precipitation":39.9,"pm10":31,"pm2,5":156,"o3":23,"no2":25,"so2":1},{"id":85,"day_by_day":"2021-12-24 00:00:00 UTC","temperature":3,"precipitation":0.4,"pm10":42,"pm2,5":140,"o3":10,"no2":50,"so2":1},{"id":86,"day_by_day":"2021-12-25 00:00:00 UTC","temperature":-9,"precipitation":16.6,"pm10":57,"pm2,5":40,"o3":23,"no2":32,"so2":8},{"id":87,"day_by_day":"2021-12-26 00:00:00 UTC","temperature":-10,"precipitation":15,"pm10":46,"pm2,5":159,"o3":6,"no2":40,"so2":8},{"id":88,"day_by_day":"2021-12-27 00:00:00 UTC","temperature":14,"precipitation":15.5,"pm10":63,"pm2,5":38,"o3":5,"no2":38,"so2":7},{"id":89,"day_by_day":"2021-12-28 00:00:00 UTC","temperature":6,"precipitation":8.6,"pm10":44,"pm2,5":66,"o3":17,"no2":13,"so2":5},{"id":90,"day_by_day":"2021-12-29 00:00:00 UTC","temperature":-3,"precipitation":34.5,"pm10":35,"pm2,5":157,"o3":5,"no2":28,"so2":8},{"id":91,"day_by_day":"2021-12-30 00:00:00 UTC","temperature":-9,"precipitation":18.2,"pm10":59,"pm2,5":140,"o3":3,"no2":39,"so2":3},{"id":92,"day_by_day":"2021-12-31 00:00:00 UTC","temperature":17,"precipitation":1,"pm10":35,"pm2,5":68,"o3":20,"no2":16,"so2":9},{"id":93,"day_by_day":"2022-01-01 00:00:00 UTC","temperature":-3,"precipitation":26.6,"pm10":8,"pm2,5":159,"o3":1,"no2":16,"so2":7},{"id":94,"day_by_day":"2022-01-02 00:00:00 UTC","temperature":-7,"precipitation":13.6,"pm10":30,"pm2,5":70,"o3":22,"no2":50,"so2":10},{"id":95,"day_by_day":"2022-01-03 00:00:00 UTC","temperature":-9,"precipitation":28.8,"pm10":27,"pm2,5":80,"o3":27,"no2":18,"so2":4},{"id":96,"day_by_day":"2022-01-04 00:00:00 UTC","temperature":-2,"precipitation":6.4,"pm10":9,"pm2,5":42,"o3":2,"no2":37,"so2":1},{"id":97,"day_by_day":"2022-01-05 00:00:00 UTC","temperature":-3,"precipitation":30.9,"pm10":53,"pm2,5":159,"o3":3,"no2":42,"so2":4},{"id":98,"day_by_day":"2022-01-06 00:00:00 UTC","temperature":-6,"precipitation":3,"pm10":43,"pm2,5":147,"o3":8,"no2":29,"so2":5},{"id":99,"day_by_day":"2022-01-07 00:00:00 UTC","temperature":5,"precipitation":29.9,"pm10":40,"pm2,5":114,"o3":7,"no2":36,"so2":8},{"id":100,"day_by_day":"2022-01-08 00:00:00 UTC","temperature":4,"precipitation":39.8,"pm10":45,"pm2,5":136,"o3":2,"no2":48,"so2":5}]`)
//^^^^testowe dane bo te api jest słabe, do wywalenia na końcu

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
                label: 'Średnia kwartalna temperatura w °C',
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
                label: 'Średnie opady deszczu w l/m²',
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
                label: 'My First Dataset',
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

async function get_data() {
    // const response = await fetch("https://my.api.mockaroo.com/data.json?key=a2d938f0");
    //const data = await response.json();
    // chart1(data)
    chart1(data);
    chart2(data);
    chart3(data);
    chart4(data);
    chart5(data);
    chart6(data);
    document.getElementById("sticky").style.display = 'none';
    document.getElementById("sticky").style.display = 'block';
}

get_data()
