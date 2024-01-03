/*  SCOPES IN JS */

function one (){
    let firstname = 'Vishal'
    function two() {
        let lastname = ' Rajput'
        console.log(firstname + lastname)
    }
    two()
    // console.log(lastname)           
}

one()

/* 
NOTES:
1)  WE CAN'T USE VARIABLE USED IN CHILD FUNCTION BEACAUSE OF SCOPING IN JS WHICH IS BRACES
2)  BUT WE CAN USE PARENT VARIABLE DECLARED OUT OF BRACES IN CHILD FUNCTION OR VICE VERSA
3)  ABOVE IN FUNCTION ONE THE "console.log(lastname)" WILL THROW ERROR BECAUSE LASTNAME IS DECALRED IN FUNC TWO
*/