//1.For

for (let i = 0; i <= 6; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// for (let i = 5; i >= 1; i--) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

//=======================================================//

// While loop
let i = 5;
 while (i >= 1) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    i--;
 }

 //=======================================================//

 //Do..While
let j = 0;
do {
    console.log('digitando!', j);
    j++;
} while (j < 10)