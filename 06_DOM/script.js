// this use case will give empty value
// const height = parseInt(document.querySelector('#height').value)

// alert('welcome to BMI Calculator')
// selecting the form
const form = document.querySelector('form')

// adding the event on submit
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' ||  height < 0 || isNaN(height)){
        results.innerHTML = 'Please give a valid height'
        results.style.color = 'red'
        results.style.fontWeight = 'bold'
        results.style.marginTop = '15px'
    }
    else if(weight === '' ||  weight < 0 || isNaN(weight)){
        results.innerHTML = 'please give a valid weight'
        results.style.color = 'red'
        results.style.fontWeight = 'bold'
        results.style.marginTop = '15px'
    }
    else{
        const bmi = (weight / ((height*weight)/10000).toFixed(2))
        results.innerHTML = `Your BMI is ${bmi}`
        results.style.color = 'blue'
        results.style.fontWeight = 'bold'
        results.style.marginTop = '15px'
        const parent = document.querySelector('#weight-guide')
        if(bmi < 18.6){
            // height = 600 , weight = 40
            parent.children[1].style.color = 'red'
            parent.children[1].style.fontWeight = 'bold'
            
        }
        else if(bmi > 18.6 && bmi < 24.9){
            // height = 500 , weight == 25
            parent.children[2].style.color = 'green'
            parent.children[2].style.fontWeight = 'bold'
        }
        else{
            // height = 100 , weight = 500
            parent.children[3].style.color = 'red'
            parent.children[3].style.fontWeight = 'bold'
        }
    }
    

})