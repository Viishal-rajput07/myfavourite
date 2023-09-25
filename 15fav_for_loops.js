/* FOR LOOPS IN JS */

/* Multiplication table 1 to 20 */
for (let i = 2; i <= 20; i++) {
    for (let j = 1; j <=10; j++) {
        // console.log(`${i}*${j}  =  ${i*j}`)
    }
}

for (let i = 1; i <= 20; i++) {
    if(i==5){
        continue
    }
    if(i==6){
        break
    }
    console.log(i)
}

/*
Continue :=> if we use continue it skips that value and go at start of loop to repeat the task
break :=> it will not execute and get out of the scope
*/
