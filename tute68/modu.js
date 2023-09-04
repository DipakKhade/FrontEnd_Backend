

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.legth;
}

average(6,8)

module.export={
    ave:average,
    name:'Dipak'
}