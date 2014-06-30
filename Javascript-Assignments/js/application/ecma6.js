var result = [];

for (var length = 0; length--;){
    let len = length;
    result[len] = function(){
        return len;
    }
}

result[5]();