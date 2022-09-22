const billetes = [{
    billetesDe5: [],
    billetesDe10: [],
    billetesDe20: [],
    billetesDe50: [],
    billetesDe100: []
}];
let billete5 = parseInt(prompt('Cuantos billetes de 5.000$ desea ingresar?')); 
let billete10 = parseInt(prompt('Cuantos billetes de 10.000$ desea ingresar?'));
let billete20 = parseInt(prompt('Cuantos billetes de 20.000$ desea ingresar?'));
let billete50 = parseInt(prompt('Cuantos billetes de 50.000$ desea ingresar?'));
let billete100 = parseInt(prompt('Cuantos billetes de 100.000$ desea ingresar?'));

billetes[0].billetesDe5.push(billete5);
billetes[0].billetesDe10.push(billete10);
billetes[0].billetesDe20.push(billete20);
billetes[0].billetesDe50.push(billete50);
billetes[0].billetesDe100.push(billete100);

let sum5 = billete5 * 5000;
let sum10 = billete10 * 10000;
let sum20 = billete20 * 20000;
let sum50 = billete50 * 50000;
let sum100 = billete100 * 100000;

const sumaTotal = sum5 + sum10 + sum20 + sum50 + sum100;


console.log(`La suma de billetes de 5.000$ es: ${sum5}$
            La suma de billetes de 10.000$ es: ${sum10}$
            La suma de billetes de 20.000$ es: ${sum20}$
            La suma de billetes de 50.000$ es: ${sum50}$
            La suma de billetes de 100.000$ es: ${sum100}$ `);

console.log(`La suma total de todos los billetes da ${sumaTotal}`)

const cargaCajero = [{
    totalBilletesDe5: [],
    totalBilletesDe10: [],
    totalBilletesDe20: [],
    totalBilletesDe50: [],
    totalBilletesDe100: []
}];

cargaCajero[0].totalBilletesDe5.push(sum5);
cargaCajero[0].totalBilletesDe10.push(sum10);
cargaCajero[0].totalBilletesDe20.push(sum20);
cargaCajero[0].totalBilletesDe50.push(sum50);
cargaCajero[0].totalBilletesDe100.push(sum100);


console.log(cargaCajero)

if(sumaTotal === 0){

    alert('cajero basio llename')
}else{
    let retirar = parseInt(prompt('Cuanto dinero desea retirar?'));
    
    

    alert(`El cajero tiene una cantidad disponible de ${sumaTotal}$ pesos 
con ${billete5} Billetes de 5000$
con ${billete10} Billetes de 10000$
con ${billete20} Billetes de 20000$
con ${billete50} Billetes de 50000$
con ${billete100} Billetes de 100000$
`)
let retirarBilletes100 = Math.floor(retirar / 100000);
retirar -= retirarBilletes100 * 100000;
let retirarBilletes50 = Math.floor(retirar / 50000);
retirar -= retirarBilletes50 * 50000;
let retirarBilletes20 = Math.floor(retirar / 20000);
retirar -= retirarBilletes20 * 20000;
let retirarBilletes10 = Math.floor(retirar / 10000);
retirar -= retirarBilletes10 * 10000;
let retirarBilletes5 = Math.floor(retirar / 5000);
retirar -= retirarBilletes5 * 5000;

console.log(retirarBilletes100);
console.log(retirarBilletes50);
console.log(retirarBilletes20);
console.log(retirarBilletes10);
console.log(retirarBilletes5);
}

