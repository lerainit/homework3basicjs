"use strict";



let userNumber = +prompt( 'Enter your number here!' );


while ( isNaN(userNumber) || userNumber === 0 ){

	userNumber = +prompt( 'Enter your number here!' );}


while ( userNumber % 1 !== 0){


userNumber = +prompt('Enter your number here!');

}



if ( userNumber < 5 ){


console.log('Sorry,no number');


}

else {	


for ( let i = 0; i <= userNumber; i = i + 5 ){

console.log(i);

}


}

/*----------------------------------------------------------------------*/


let m = +prompt('Введите первое число!')


let n = +prompt('Введите второе число');

nextPrime:

for ( m ; m <= n; m++) { 


for (let j = 2; j < m; j++) {


if (m % j == 0) continue nextPrime; 

}

console.log( m ); 


}





