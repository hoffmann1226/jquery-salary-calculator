console.log('js')

$(document).ready(init)

function init(){
    console.log('in jq')
    //setup button click event handler
    $('#submitBtn').on('click', gatherInput)
}

function gatherInput(){
    //verify that click works
    console.log('click works')
    event.preventDefault();


    //create object to manipulate
    let person = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }
    
}
