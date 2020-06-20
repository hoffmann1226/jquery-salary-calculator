console.log('js')

$(document).ready(init)

function init(){
    console.log('in jq')
    


    //setup button click event handler
    $('#submitBtn').on('click', gatherInput)
    
}

function gatherInput(){
    console.log('click works')
    event.preventDefault();
}