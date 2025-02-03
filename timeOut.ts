//creating a func that call another func afet 1 sec

function onesbaad(fun : () => void){
    setTimeout(fun,3000);
}

function input():void{
        console.log("Hello anshu");
}

onesbaad(input);