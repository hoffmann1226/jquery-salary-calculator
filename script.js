console.log('js')

//create an empty array of employees for future use
let arrayOfEmployees=[]


$(document).ready(init)

function init(){
    console.log('in jq')
    
    //setup button click event handler
    $('#submitBtn').on('click', handleSubmitClick)

    //set up event handler for the delete button
    $('#employeeOut').on('click', '.deleteBtn', deleteRow)
}

//this is called when the submit button is clicked
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

    //call display Employees
    displayEmployees(arrayOfEmployees)

    //call display total monthly cost
    totalCost(arrayOfEmployees)
}

//display the new arrayOfEmployees on the DOM
function displayEmployees(arrayOfEmployees){
    console.log('in display employees')
    //target employeeOut by id
    $('#employeeOut').empty();
    //loop through arrayOfEmployees
    for(let i=0; i<arrayOfEmployees.length; i++){
        //append each to the table in the DOM
    let p= `<tr>
    <td>${arrayOfEmployees[i].fName}</td> 
    <td>${arrayOfEmployees[i].lName}</td> 
    <td>${arrayOfEmployees[i].id}</td>
    <td>${arrayOfEmployees[i].jTitle}</td>
    <td>${arrayOfEmployees[i].annSal}</td>
    <td><button class="deleteBtn">Delete</button></td>
    </tr>`
    $('#employeeOut').append(p);
    }


}

//display the total monthly cost of employees
function totalCost(arrayOfEmployees){
    //target total cost by name
    const el = $( '#totalCost');
    el.empty();
    //declare monthly cost
    let monthlyCost = 0;
    //loop through array of objects.  Pull the salary divide it by 12 and add to total cost
    for(let i=0; i<arrayOfEmployees.length; i++){
            monthlyCost= monthlyCost + (Number(arrayOfEmployees[i].annSal))/12
    };
    //push monthlyCost to the DOM
    el.append(`Total Monthly Cost= $${monthlyCost}`)
}

//make the delete button delete the row
function deleteRow(){
    console.log('delete clicked')
    $ (this).parent().parent().remove()
}
