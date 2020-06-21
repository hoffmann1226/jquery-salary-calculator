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
   
    let fName= $('#firstName').val();
    let lName= $('#lastName').val();
    let id= $('#idNumber').val();
    let jTitle= $('#jobTitle').val();
    let  annSal= $('#annualSalary').val()

    addEmployee(fName, lName, id, jTitle, annSal)
    console.log('array is now', arrayOfEmployees)
}

function addEmployee(fName, lName, id, jTitle, annSal){
    
    //create an array using inputs from DOM
    let object = {fName, lName, id, jTitle, annSal}
    arrayOfEmployees.push(object)

    //clear input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('')
}

