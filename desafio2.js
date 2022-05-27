const A = parseInt(gets());
const B = parseInt(gets());
const total = retornaSoma (A, B);

function retornaSoma (inicio, fim) {
    let aux = 0;
    for (let i = inicio; i <= fim; i++){
       aux = aux + i; 
    } 
    return aux;  
};


print(total);


//console.log(total);



