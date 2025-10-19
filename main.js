let a='', b='', op='';
let isDivByZero = false;
const output = document.querySelector(".output");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", evaluate);

function add(){
    a=(Number(a) + Number(b)).toString();
    b='';
}

function subtract(){
    a=(Number(a) - Number(b)).toString();
    b='', op='';
}

function multiply(){
    a=(Number(a) * Number(b)).toString();
    b='', op='';
}

function divide(){
    if(Number(b)==0){
        isDivByZero = true;
        a='', b='', op='';
    }
    else{
        a=(Number(a) / Number(b)).toString();
        b='', op='';
    }
    
}

function evaluate(e){

    if(e.target.id == "clear"){
        a="";
        b="";
        op="";
    }
    else if(e.target.id == "equal" || (isNaN(e.target.id) && op && b)){
        calculate();
        if(e.target.id != "equal" && a){
            op=e.target.id;
        }
    }
    else if(isNaN(e.target.id) && a){
        op=e.target.id;
    }
    else{
        if(op){
            b+=e.target.id;
        }
        else{
            a+=e.target.id;
        }
    }
    if(isDivByZero){
        display("You cant divide by 0 idiot");
        isDivByZero = false;
    }
    else{
        display();
    }
    
}

function calculate(){
    switch(op){
        case "plus":
            add();
            break;
        case "subtract":
            subtract();
            break;
        case "multiply":
            multiply();
            break;
        case "divide":
            divide();
            break;
    }
}

function display(error=""){
    console.log(a);
    console.log(b);
    console.log(op);
    
    if(error){
        output.textContent=error;
    }
    else{
        if(b){
            output.textContent = b;
        }
        else if(a){
            output.textContent = a;
        }
        else{
            output.textContent = "";
        }
    }
}