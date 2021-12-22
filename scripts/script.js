export function get_data_by_month(data, month){
    for(i = 1; i<= 100; i++){
        if(data[i][1].substring(5,6) == month)
            return data[i];
    }
}
