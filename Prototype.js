
 //Prototype in Javascript
 console.log(Array.prototype);
 //creating a Prototype of Array
 console.log(new Array()); 

//Using prototype
Array.prototype.filter=()=>{
    let arr=[

    ]
    for(let i=0;i<arr.length;i++){
        if (this[i]%2===0){
            arr.push(this[i])
        }
    }
    return arr;
}
console.log([20,30,40,65,45].filter());

let myArra=[45,45,68,34,57];
let filteringEvenNumbers=myArra.filter(e=>e%2===0);
console.log(filteringEvenNumbers)
