"use strict";
//creating a func that call another func afet 1 sec
function onesbaad(fun) {
    setTimeout(fun, 3000);
}
function input() {
    console.log("Hello anshu");
}
onesbaad(input);
