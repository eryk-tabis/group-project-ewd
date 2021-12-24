//temperature fron december every day linear
// function get_data(){
//     var xmlhttp = new XMLHttpRequest();
//     //link to api here
//     var url = "https://my.api.mockaroo.com/data.json?key=a2d938f0";
//     //nie wiem co to ale do sprawdzenia
//     // xmlhttp.onreadystatechange = function() {
//     //     if (this.readyState == 4 && this.status == 200) {
//     //         var myArr = JSON.parse(this.responseText);
            
//     //     }
//     // };
//     xmlhttp.open("GET", url, false);
//     xmlhttp.send();
//     return JSON.parse(xmlhttp.responseText)
//     }
    
// function get_data_by_month(data, month){
//     new_data = []
//     for(i = 0; i< 100; i++){
//          if(data[i]["day_by_day"].substring(5,7) == month){
             
//              new_data.push(data[i]["day_by_day"].slice(0,11));
//          }
//     }
//     return new_data;
// }
// function get_temp_by_month(data, month){
//     new_data = []
//     for(i = 0; i< 100; i++){
//          if(data[i]["day_by_day"].substring(5,7) == month){
             
//              new_data.push(data[i]["temperature"]);
//          }
//     }
//     return new_data;
// }


all_data = get_data();
nov_days = get_data_by_month(all_data, "12")
nov_temperature = get_temp_by_month(all_data, "12")
console.log(nov_days)
console.log(nov_temperature)
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: nov_days,
        datasets: [{
            label: 'Temperatura w grudniu',
            data: nov_temperature,
            fill: false,
            borderColor: 'rgb(216, 61, 0)',
            tension: 0.1
        }]
    }
});