var count = 0;
for(var i = 3 ; i <= 7 ; i++){
    var flag = true;
    for(var j = 2 ; j < i ; j++){
        if(i % j == 0){
            flag = false;   
        } 
    }
        if(flag){
            count += 1;
    }
}

console.log(count);