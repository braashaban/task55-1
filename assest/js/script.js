let result= document.getElementById("calc");
function display(numm) {
    result.value += numm;
  
}
function Clear(){
result.value= "";
}

function Delete(){
    /// to delete the last number
  result.value = result.value.slice(0,-1);
}

function calc() {
    try{
       result.value = eval(result.value);
    }
    catch(err){
        result.value = "Error" ;
        console.log(err)
    }
}

console.log(result)