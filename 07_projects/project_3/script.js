const form = document.querySelector("form")

// this will empty usecase
// const height = parseInt(document.querySelector('#height'))

form.addEventListener('submit', function (e) {

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height == '' || height < 0 || isNaN(height)) {

        results.innerHTML = `Please give valid height ${height}`
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {

        results.innerHTML = `Please give valid weight ${weight}`
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`

        const health = document.querySelector('#health')

        if (bmi < 18.6) {
            health.innerHTML = `<span>You are under weight</span>`

        }
        else if (bmi > 24.9) {
            health.innerHTML = `<span>You are over weight</span>`

        }
        else {
            health.innerHTML = `<span>You are Healthy</span>`

        }
    }
})