/*DECLARADA*/



// function sumar(a,b){
//     let suma=a+b
//     console.log(suma)
// }

// sumar(2,1)
/*EXPRESADA */

// const sumar =  function(a,b){
//     let suma=a+b
//     console.log(suma)
// }

// sumar(2,1)

/*ARROW FUNCTION*/
// const sumar = (a,b)=>{
//     let suma=a+b
//     console.log(suma)
// }
// sumar(2,3)

let number=+prompt("Give me a number")
for(let i=1;i<=9;i++){
    document.write(`${number}x${i}=${number*i} <br> `)

}
