function get_data(){
var xmlhttp = new XMLHttpRequest();
//link to api here
var url = "https://my.api.mockaroo.com/data.json?key=a2d938f0";
//nie wiem co to ale do sprawdzenia
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);
        
//     }
// };
xmlhttp.open("GET", url, false);
xmlhttp.send();
return JSON.parse(xmlhttp.responseText)
}
