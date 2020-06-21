console.log('js')

//create an empty array of employees for future use
let arrayOfEmployees=[]


$(document).ready(init)

function init(){
    console.log('in jq')
    //setup button click event handler
    $('#submitBtn').on('click', handleSubmitClick)
}

function handleSubmitClick(){
    //verify that click works
    console.log('submit button works')
    event.preventDefault();

    //get inputs/create object and call addEmployee
    let person = {
        fName: $('#firstName').val(),
        lName: $('#lastName').val(),
        id: $('#idNumber').val(),
        jtitle: $('#jobTitle').val(),
        annSal: $('#annualSalary').val()
    }
    console.log(person)
}

