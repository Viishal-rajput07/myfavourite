const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        // console.log(e.target)

        // to change the bg-color on click of button
        // body.style.backgroundColor = e.target.id

        // if user click again on the button then bg-color will change to default('white')
        let selectedColor = e.target.id;
        body.style.backgroundColor = body.style.backgroundColor === selectedColor ? 'white' : selectedColor

    })
})

// if user click on body then bg-color will set default('white')
body.addEventListener('click', function (e) {

    let arr = Array.from(buttons)

    const isButton = arr.some(function (button) {
        return button.contains(e.target)
    })

    if (!isButton) {
        body.style.backgroundColor = 'white'
    }
})


/*
1. Source: A good project which I learnt from youtube by Hitesh choudhary sir from his channel 'Chai and code' 
   and playlist 'chai and javascript', video 35;
2. At start the project was build to change bg-color of body by clicking on each color respectively.
3. I add some functionality:-
   a) if user clicks again on color button the bg-color will set default to 'white'.
   b) if user click on any part of body except buttons then the bg-color set to default 'white'. 
*/