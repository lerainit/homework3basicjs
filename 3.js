"use strict";



let userNumber = +prompt( 'Enter your number here!' );


  while ( userNumber % 1 !== 0 || isNaN(userNumber) || userNumber === 0 ){
	

         userNumber = +prompt( 'Enter your number here!' );

  }


if ( userNumber < 5 ){


    console.log('Sorry,no number');


}

else {	

   for ( let i = 0; i <= userNumber; i = i + 5 ){

        console.log(i);

   }

}

