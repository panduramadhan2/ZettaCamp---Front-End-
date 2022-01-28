const number = [1,2,3,4,5,6,7,8,9,10];

function result(number) {
    let ganjil = [];
    let genap = [];


for (const nomer of number) {
    if (nomer %2==0) {
        genap.push(nomer);
    }else {
        ganjil.push(nomer);
    }
}

const returnObject = {
    ganjil,
    genap,
}; 
return returnObject;
}

console.log(result(number));