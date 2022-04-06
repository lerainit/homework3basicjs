"use strict";


let m = +prompt('Введите первое число!')


let n = +prompt('Введите второе число');

nextPrime:

for ( m ; m <= n; m++) { 


for (let j = 2; j < m; j++) {


if (m % j == 0) continue nextPrime; 

}

console.log( m ); 


}
